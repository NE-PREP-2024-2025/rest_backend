import { NextFunction, Response, Request } from "express";
import prisma from "../prisma/prisma-client";
import { VehicleType } from "../types";
import ServerResponse from "../utils/ServerResponse";
export class VehicleController {
  public static async createVehicle(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const {
        vehiclePlateNumber,
        vehicleType,
        vehicleColor,
        vehicleBrand,
        vehicleModel,
        vehicleYear,
      } = req.body;
      const vehicle = await prisma.vehicle.create({
        data: {
          vehiclePlateNumber,
          vehicleType,
          vehicleColor,
          vehicleBrand,
          vehicleModel,
          vehicleYear,
          vehicleOwnerId: req.user?.id as string,
        },
      });
      ServerResponse.success(res, "Vehicle created successfully", vehicle);
      return;
    } catch (error) {
      next(error);
    }
  }
  public static async getVehicles(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { page, limit, search,year } = req.query;
      const pageNumber = Number(page) || 1;
      const limitNumber = Number(limit) || 10;
      let count = 0;
      if (!search) {
        count = await prisma.vehicle.count();
      }
      const filters: any = {};
      if (search) {
        filters.OR = [
          {
            vehiclePlateNumber: {
              contains: search?.toString().trim() as string,
              mode: "insensitive",

            },
          },
          
          {
            vehicleColor: {
              contains: search?.toString().trim() as string,
              mode: "insensitive",
            },
          },
          {
            vehicleBrand: {
              contains: search?.toString().trim() as string,
              mode: "insensitive",

            },
          },
          {
            vehicleModel: {
              contains: search?.toString().trim() as string,
              mode: "insensitive",

            },
          },
        
           
        
        
      ];
      }
      if (year) {
        filters.vehicleYear = {
          equals: Number(year) as number,
        };
      }

      const vehicles = await prisma.vehicle.findMany({
        where:filters,
        skip: (pageNumber - 1) * limitNumber,
        take: limitNumber,
      });
      count = vehicles.length;
      ServerResponse.successWithPagination(
        res,
        "Vehicles fetched successfully",
        vehicles,
        count,
        pageNumber ,
        limitNumber
      );
    } catch (error) {
      next(error);
    }
  }
  public static async getVehicle(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const vehicle = await prisma.vehicle.findUnique({
        where: {
          id: req.params.id,
        },
      });
      if (!vehicle) {
        ServerResponse.notFound(res, "Vehicle not found");
        return;
      }
      if (req.user?.id !== vehicle?.vehicleOwnerId) {
        ServerResponse.unauthorized(
          res,
          "You are not authorized to access this vehicle"
        );
        return;
      }
      ServerResponse.success(res, "Vehicle fetched successfully", vehicle);
    } catch (error) {
      next(error);
    }
  }
  public static async updateVehicle(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: req.user?.id as string,
        },
      });

      const vehicle = await prisma.vehicle.findUnique({
        where: {
          id: req.params.id,
        },
      });
      if (!vehicle) {
        ServerResponse.notFound(res, "Vehicle not found");
        return;
      }

      if (req.user?.id !== vehicle?.vehicleOwnerId || user?.role != "ADMIN") {
        ServerResponse.unauthorized(
          res,
          "You are not authorized to update this vehicle"
        );
        return;
      }
      const updatedVehicle = await prisma.vehicle.update({
        where: {
          id: req.params.id,
        },
        data: {
          vehiclePlateNumber: req.body.vehiclePlateNumber,
          vehicleType: req.body.vehicleType,
          vehicleColor: req.body.vehicleColor,
          vehicleBrand: req.body.vehicleBrand,
          vehicleModel: req.body.vehicleModel,
          vehicleYear: req.body.vehicleYear,
        },
      });
      ServerResponse.success(
        res,
        "Vehicle updated successfully",
        updatedVehicle
      );
    } catch (error) {
      next(error);
    }
  }
  public static async deleteVehicle(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const vehicle = await prisma.vehicle.delete({
        where: {
          id: req.params.id,
        },
      });
      ServerResponse.success(res, "Vehicle deleted successfully", vehicle);
    } catch (error) {
      next(error);
    }
  }
  public static async getVehicleByPlateNUmber(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const vehicle = await prisma.vehicle.findUnique({
        where: {
          vehiclePlateNumber: req.params.vehiclePlateNumber,
        },
      });
      if (!vehicle) {
        ServerResponse.notFound(res, "Vehicle not found");
        return;
      }
      if (req.user?.id !== vehicle?.vehicleOwnerId) {
        ServerResponse.unauthorized(
          res,
          "You are not authorized to access this vehicle"
        );
        return;
      }
      ServerResponse.success(res, "Vehicle fetched successfully", vehicle);
    } catch (error) {
      next(error);
    }
  }
  public static async getVehicleByUserId(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const vehicles = await prisma.vehicle.findMany({
        where: {
          vehicleOwnerId: req.user?.id as string,
        },
      });
      ServerResponse.success(res, "Vehicles fetched successfully", vehicles);
    } catch (error) {
      next(error);
    }
  }
}
