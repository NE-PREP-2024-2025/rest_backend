import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

enum SlotStatus{
  AVAILABLE = "AVAILABLE",
  OCCUPIED = "OCCUPIED",
  MAINTENANCE = "MAINTENANCE",
  RESERVED = "RESERVED"
}
enum SlotSize{
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE"
}

export class CreateManySlotDto{
  @IsNotEmpty()
  @IsNumber()
  numberOfSlots: number
  @IsNotEmpty()
  @IsEnum(SlotSize)
  size: SlotSize
}


export class UpdateSlotDto{
  @IsEnum(SlotStatus)
  slotStatus: string
  @IsString()
  slotCustomer: string
  @IsString()
  slotVehicle: string
  @IsEnum(SlotSize)
  size: SlotSize
}
