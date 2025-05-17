import { NextFunction, Request, Response } from "express";
import prisma from "../prisma/prisma-client";
import ServerResponse from "../utils/ServerResponse";
import {  SlotSize, SlotStatus } from "../types";
import sendMail from "../utils/emailUtility";

export class SlotOrderController {
  static async createSlotOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const { slotId, vehiclePlateNumber } = req.body;
      const user = await prisma.user.findUnique({
        where: { id: req.user?.id as string }
      });
      const slot = await prisma.slot.findUnique({
        where: { id: slotId }
      });
      if (!slot) {
        ServerResponse.notFound(res, "Slot not found")
        return
      }
      const vehicle = await prisma.vehicle.findUnique({
        where: { vehiclePlateNumber: vehiclePlateNumber }
      });
      if (!vehicle) {
        ServerResponse.notFound(res, "Vehicle not found")
        return
      }
      const slotOrder = await prisma.slotOrder.create({
        data: {
          slotCustomerId: req.user?.id,
          slotId,
          slotVehicleId: vehicle.id,
          vehicleId:vehicle.id,
          pricePerHour: slot.slotSize === SlotSize.SMALL ? parseFloat(process.env.SMALL_SLOT_PRICE as string) : slot.slotSize === SlotSize.MEDIUM ? parseFloat(process.env.MEDIUM_SLOT_PRICE as string) : parseFloat(process.env.LARGE_SLOT_PRICE as string),
          hours: 0,
        }
      });
      await prisma.slot.update({
        where: { id: slotId },
        data: {
          slotStatus: SlotStatus.OCCUPIED
        }
      });
      await sendMail({
        name: user?.firstName + " " + user?.lastName,
        orderId: slotOrder.id,
        totalAmount: slotOrder.pricePerHour * slotOrder.hours
      }, user?.email as string, "Slot Order Confirmation", "slot-request-confirmation")
      ServerResponse.success(res, "Slot order created successfully", slotOrder)
    } catch (error) {
      next(error)
    }
  }
  static async getSlotOrders(req: Request, res: Response, next: NextFunction) {
    const { page, limit } = req.query;
    const pageNumber = parseInt(page as string) || 1;
    const limitNumber = parseInt(limit as string) || 10;
    const skip = (pageNumber - 1) * limitNumber;
    try {
      const slotOrders = await prisma.slotOrder.findMany({
   
        skip,
        take: limitNumber,
        include: {
          slot: true,
          slotVehicle: true,
        },
        orderBy: { createdAt: "desc" }
      });
      const total = await prisma.slotOrder.count({
        where: { slotCustomerId: req.user?.id as string }
      });
      ServerResponse.successWithPagination(res, "Slot orders fetched successfully", slotOrders, total, pageNumber, limitNumber)
    } catch (error) {
      next(error)
    }
  }
  static async getSlotOrderById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const slotOrder = await prisma.slotOrder.findUnique({
        where: { id }
      });
      if (!slotOrder) {
        ServerResponse.notFound(res, "Slot order not found")
        return
      }
      ServerResponse.success(res, "Slot order fetched successfully", slotOrder)
    } catch (error) {
      next(error)
    }
  }

  static async deleteSlotOrder(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      await prisma.slotOrder.delete({
        where: { id }
      });
      ServerResponse.success(res, "Slot order deleted successfully")
    } catch (error) {
      next(error)
    }
  }
  static async updateSlotOrderStatus(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const { status } = req.body;
    try {
    
      const slotOrder = await prisma.slotOrder.findUnique({
        where: { id }
      });
      if (!slotOrder) {
        ServerResponse.notFound(res, "Slot order not found")
        return
      }
      const hours = new Date().getHours() - new Date(slotOrder.createdAt).getHours();
      const slotOrderUpdated = await prisma.slotOrder.update({
        where: { id },
        data: {
          slotOrderStatus: status,
          hours
        }
      });
      await prisma.slot.update({
        where: { id: slotOrder.slotId },
        data: {
          slotStatus: status === SlotStatus.OCCUPIED ? SlotStatus.AVAILABLE : SlotStatus.OCCUPIED
        }
      });
      ServerResponse.success(res, "Slot order status updated successfully", slotOrderUpdated)
    } catch (error) {
      next(error)
    }
  }
  static async getSlotOrdersBySlotId(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const { page, limit } = req.query;
    const pageNumber = parseInt(page as string) || 1;
    const limitNumber = parseInt(limit as string) || 10;
    const skip = (pageNumber - 1) * limitNumber;
    try {
      const slotOrders = await prisma.slotOrder.findMany({
        where: { slotId: id },
        skip,
        take: limitNumber,
        orderBy: { createdAt: "desc" }
      });
      const total = await prisma.slotOrder.count({
        where: { slotId: id }
      });
      ServerResponse.successWithPagination(res, "Slot orders fetched successfully", slotOrders, total, pageNumber, limitNumber)
    } catch (error) {
      next(error)
    }
  }
  static async getSlotOrdersBySlotCustomerId(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
    const { page, limit } = req.query;
    const pageNumber = parseInt(page as string) || 1;
    const limitNumber = parseInt(limit as string) || 10;
    const skip = (pageNumber - 1) * limitNumber;
    const slotOrders = await prisma.slotOrder.findMany({
      where: { slotCustomerId: id },
      skip,
      take: limitNumber,
      orderBy: { createdAt: "desc" },
      include: {
        slot: true,
        slotVehicle:true
      }
    });
    const total = await prisma.slotOrder.count({
      where: { slotCustomerId: id }
      });
      ServerResponse.successWithPagination(res, "Slot orders fetched successfully", slotOrders, total, pageNumber, limitNumber)
    } catch (error) {
      next(error)
    }
  }
}
  

