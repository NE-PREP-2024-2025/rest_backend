import { IsNotEmpty, IsString, IsArray, IsNumber } from "class-validator";

export class CreateOrderDto {
  @IsNotEmpty({ message: "User ID is required" })
  @IsString({ message: "User ID should be a string" })
  userId!: string;

  @IsNotEmpty({ message: "Order items are required" })
  @IsArray({ message: "Order items should be an array" })
  orderItems!: {
    productId: string;
    quantity: number;
  }[];

  @IsNotEmpty({ message: "Total amount is required" })
  @IsNumber({}, { message: "Total amount should be a number" })
  totalAmount!: number;
}