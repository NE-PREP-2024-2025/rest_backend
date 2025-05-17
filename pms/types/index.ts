import { Request } from "express";

export interface AuthRequest extends Request{
  user: {
    id: string;
  },


}
export enum SlotSize{
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE"
}
export enum VehicleType{
  CAR = "CAR",
  BIKE = "BIKE",
  TRUCK = "TRUCK",
  BUS = "BUS"
}

export interface VehicleRequest extends Request{
  user:{
  id:string
  },
  body: {
    vehiclePlateNumber: string;
    vehicleType: VehicleType;
    vehicleColor: string;
    vehicleBrand: string;
    vehicleModel: string;
    vehicleYear: string;
  }
}


export enum SlotStatus{
  AVAILABLE = "AVAILABLE",
  OCCUPIED = "OCCUPIED",
  MAINTENANCE = "MAINTENANCE",
  RESERVED = "RESERVED"
}

export interface SlotRequest extends Request{
  user:{
    id:string
  },
  body: {
    numberOfSlots: number;
    slotSize: SlotSize;
    
  }
}