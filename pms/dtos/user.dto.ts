import { IsAlpha, IsEmail, IsNotEmpty, Matches, Max, Min } from "class-validator";
export class UserDto{
  @IsNotEmpty()
  @IsAlpha("en-US", {
    message:"First name should contain only letter no symbol and number"
  })
  @Min(3, {
    message:"First name must have minimum 3 characters"
  })
  @Max(16, {
    message:"First name can not exceed 16 characters"
  })

  firstName!: string
  @IsNotEmpty()
  @IsAlpha("en-US", {
    message:"Last name should contain only letter no symbol and number"
  })
  @Min(3, {
    message:"Last name must have minimum 3 characters"
  })
  @Max(16, {
    message:"Last name can not exceed 16 characters"
  })
  lastName!: string;
  @IsEmail()
    @IsNotEmpty()
  email!: string;
  @Matches(/^(?=.*[A-Z])(?=.*[a-z](?=.*[\d](?=.*[\W_])[A-Za-z\d\W_]{8,}))$/, {
    message:"Password must be atleast 8 characters contains uppercase,lowercase digits and special characters"
  })
  password!: string;
  
} 