import { NextFunction, Request, Response } from "express";
import prisma from "../prisma/prisma-client";
import ServerResponse from "../utils/ServerResponse";
import {SlotSize, SlotStatus } from "../types";
import { SlotUtility } from "../utils";

export class SlotController {
  public static async createSlot(req: Request, res: Response, next: NextFunction) {
    try {
      const { slotSize } = req.body;
      const slot = await prisma.slot.create({
        data: {
          
          slotSize,
          slotNumber: await SlotUtility.generateSlotNumbers()
        }
      })
      ServerResponse.success(res, "Slot created successfully", slot)
    } catch (error) {
      next(error)
    }

  }
  public static async createManySlots(req: Request, res: Response, next: NextFunction) {
    try {
      const { numberOfSlots, slotSize } = req.body;
      const slots = await SlotUtility.generateManySlotNumbers(numberOfSlots);
      const createdSlots = await prisma.slot.createMany({
        data: slots.map((slotNumber) => ({
          slotNumber,
          slotSize
        }))
      })
      ServerResponse.success(res, "Slots created successfully", createdSlots)
    } catch (error) {
      next(error)
    }
  }
  public static async getSlots(req: Request, res: Response, next: NextFunction) {
    try {
      const { page, limit, search, slotSize, slotStatus } = req.query;
  
      const pageNumber = parseInt(page as string) || 1;
      const limitNumber = parseInt(limit as string) || 10;
      const skip = (pageNumber - 1) * limitNumber;
  
      const filters: any = {};
  
      if (search) {
        filters.slotNumber = {
          contains: search.toString().trim() as string,
          mode: "insensitive",
        };
      }
  
      if (slotSize) {
        filters.slotSize = slotSize as SlotSize;
      }
  
      if (slotStatus) {
        filters.slotStatus = slotStatus as SlotStatus;
      }
  
      const [slots, total] = await Promise.all([
        prisma.slot.findMany({
          where: filters,
          skip,
          take: limitNumber,
          orderBy: {
            slotNumber: "asc",
          },
        }),
        prisma.slot.count({
          where: filters,
        }),
      ]);
  
      
      ServerResponse.successWithPagination(res, "Slots fetched successfully", slots, total, pageNumber, limitNumber)
    } catch (error) {
      next(error);
    }
  }
  public static async getSlotById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const slot = await prisma.slot.findUnique({
        where: { id },
      });
        
      if (!slot) {
        ServerResponse.notFound(res, "Slot not found")
        return
      }
      ServerResponse.success(res, "Slot fetched successfully", slot)
    } catch (error) {
      next(error)
    }
  }
  public static async updateSlot(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { slotSize, slotStatus } = req.body;
      const slot = await prisma.slot.update({
        where: { id },
        data: { slotSize, slotStatus }
      });
      ServerResponse.success(res, "Slot updated successfully", slot)
    } catch (error) {
      next(error)
    }
  }
  public static async deleteSlot(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      // delete with also associated foreign key
      await prisma.slot.delete({
        where: { id },
        
      });
      ServerResponse.success(res, "Slot deleted successfully")
    } catch (error) {
      next(error)
    }
  }
}