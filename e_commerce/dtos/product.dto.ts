import { IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class CreateProductDto {
  @IsNotEmpty({ message: "Name is required" })
  @IsString({ message: "Name should be string" })
  name!: string;

  @IsNotEmpty({ message: "Description is required" })
  @IsString({ message: "Description should be string" })
  description!: string;

  @IsNotEmpty({ message: "Price is required" })
  @IsNumber({}, { message: "Price should be number" })
  @Min(0, { message: "Price cannot be negative" })
  price!: number;

  @IsNotEmpty({ message: "Category is required" })
  @IsString({ message: "Category should be string" })
  category!: string;
}