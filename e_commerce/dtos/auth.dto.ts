import { IsEmail, IsNotEmpty, IsString, Matches } from "class-validator";

export class LoginDto{
  @IsNotEmpty({
    message:"Email is required"
  })
  @IsEmail()
  email!: string
  @IsNotEmpty({
    message:"Password is Required"
  })
  @IsString({
    message:"Password should be string"
  })
  @Matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/, {
    message:"Password must be atleast 8 characters long,contain uppercase,lowercase and symbol"
  })  
  password!:string
}

export class RegisterDto {
  @IsNotEmpty({
    message: "First name is required",
  })
  @IsString({
    message: "First name should be string",
  })
  firstName!: string;

  @IsNotEmpty({
    message: "Last name is required",
  })
  @IsString({
    message: "Last name should be string",
  })
  lastName!: string;

  @IsNotEmpty({
    message: "Email is required",
  })
  @IsEmail()
  email!: string;

  @IsNotEmpty({
    message: "Password is required",
  })
  @IsString({
    message: "Password should be string",
  })
  @Matches(
    /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/,
    {
      message:
        "Password must be atleast 8 characters long,contain uppercase,lowercase and symbol",
    }
  )
  password!: string;
} 

export class ResetPasswordDto {
  @IsNotEmpty({
    message: "Password is required",
  })
  @IsString({
    message: "Password should be string",
  })
  @Matches(
    /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/,
    {
      message:
        "Password must be atleast 8 characters long,contain uppercase,lowercase and symbol",
    }
  )
  password!: string;
}

export class VerifyEmailDto {
  @IsNotEmpty({
    message: "Email is required",
  })
  @IsEmail()
  email!: string;
}


export class EmailDto{
  @IsNotEmpty({
    message: "Email is required",
  })
  @IsEmail()
  email!: string;
}