import { Response } from "express";
import prisma from "../prisma/prisma-client";
import ServerResponse from "./ServerResponse";

export class SlotUtility {
  public static async generateSlotNumbers() {
    const lastSlotNumber = await prisma.slot.findFirst({
      orderBy: {
        slotNumber: "desc",
      },
    });

    const lastSlotNumberInt = lastSlotNumber?.slotNumber || "SLOT000";
    const newSlotNumber = `SLOT${(parseInt(lastSlotNumberInt.slice(4)) + 1)
      .toString()
      .padStart(3, "0")}`;

    return newSlotNumber;
  }

  public static async generateManySlotNumbers(numberOfSlots: number) {
    const lastSlotNumber = await prisma.slot.findFirst({
      orderBy: {
        slotNumber: "desc",
      },
    });

    const lastNumber = parseInt(lastSlotNumber?.slotNumber?.slice(4) || "0");

    const slotNumbers: string[] = [];

    for (let i = 1; i <= numberOfSlots; i++) {
      const slotNumber = `SLOT${(lastNumber + i).toString().padStart(3, "0")}`;
      slotNumbers.push(slotNumber);
    }

    return slotNumbers;
  }
}



export class SlotOrderUtility{
  public static async checkWhetherVehicleAndSlotSizeMatch(res: Response, vehicleId: string, slotId: string) {
    const vehicle = await prisma.vehicle.findUnique({
      where: {
        id: vehicleId
      }
    })
    if (!vehicle) {
      ServerResponse.notFound(res, "Vehicle not found")
      return
    }
    const slot = await prisma.slot.findUnique({
      where: {
        id: slotId
      }
    })
    if (!slot) {
      ServerResponse.notFound(res, "Slot not found")
      return
    }
    if (vehicle.vehicleType == "BIKE" && slot.slotSize == "SMALL") { 
      return true
    }
    if (vehicle.vehicleType == "CAR" && slot.slotSize == "MEDIUM") { 
      return true
    }
    if (vehicle.vehicleType == "TRUCK" && slot.slotSize == "LARGE") { 
      return true
    }
    if(vehicle.vehicleType=="BUS" && slot.slotSize=="LARGE"){
      return true
    }
    ServerResponse.error(res,"Vehicle and slot size do not match")
    return
  }
}