import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import prisma from "../prisma/prisma-client";
import ServerResponse from "../utils/ServerResponse";
import sendMail from "../utils/emailUtility";
import crypto from "crypto";
dotenv.config();
 class AuthController {

  public async login(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {    
      const { email, password }:{email:string,password:string} = req.body;
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        ServerResponse.error(res, "Invalid Email or Password", null);
        return;
      }

      const isMatch = bcrypt.compareSync(password, user.password);
      if (isMatch) {
        const { password: _, ...userData } = user;
        const token = jwt.sign(userData, process.env.JWT_SECRET as string, {
          expiresIn: process.env
            .JWT_EXPIRATION_TIME as jwt.SignOptions["expiresIn"],
        });
        ServerResponse.success(res, "Login Successful", {
          user: userData,
          token,
        });
        return;
      }

      ServerResponse.error(res, "Invalid Email or Password", null);
    } catch (error) {
      next(error);
    }
  }
  public async registerUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {

      const { firstName, lastName, email, password } = req.body;
      const hashedPassword = bcrypt.hashSync(password, 10);
      const user = await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          password: hashedPassword,
          role: "CUSTOMER",
        },
      });
      const { password: _, ...userData } = user;
      const token = jwt.sign(userData, process.env.JWT_SECRET as string, {
        expiresIn: process.env
          .JWT_EXPIRATION_TIME as jwt.SignOptions["expiresIn"],
      });
      ServerResponse.created(res, "User Created Successfully", {
        user: userData,
        token,
      });
    } catch (error) {
      next(error);
    }
  }
 public  async sendVerificationEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.body;
      const user = await prisma.user.findUnique({ where: { email } });
      
      if (!user) {
        ServerResponse.notFound(res, "User not found");
        return;
      }

      const verificationToken = crypto.randomBytes(32).toString("hex");
      await prisma.user.update({
        where: { email },
        data: { emailVerificationToken: verificationToken }
      });

      const verificationLink = `${process.env.APP_URL}/verify-email/${verificationToken}`;
      await sendMail(
        { name: user?.firstName, verificationLink },
        email,
        "Email Verification",
        "emailVerificationTemplate"
      );

       ServerResponse.success(res, "Verification email sent successfully");
    } catch (error) {
      next(error);
    }
  }

  public async verifyEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const {token}=req.params
      const { email } = req.body;
      const user = await prisma.user.findFirst({ where: { email:email,emailVerificationToken: token } });
      
      if (!user) {
        ServerResponse.notFound(res, "Invalid verification token");
        return;
      }

      await prisma.user.update({
        where: { id: user?.id },
        data: { 
          emailVerified: true,
          emailVerificationToken: null
        }
      });

       ServerResponse.success(res, "Email verified successfully");
    } catch (error) {
      next(error);
    }
  }

  public async requestPasswordReset(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.body;
      const user = await prisma.user.findUnique({ where: { email } });
      
      if (!user) {
         ServerResponse.notFound(res, "User not found");
      }

      const resetToken = crypto.randomBytes(32).toString("hex");
      const resetTokenExpiry = new Date(Date.now() + 3600000); 

      await prisma.user.update({
        where: { email },
        data: { 
          resetPasswordToken: resetToken,
          resetPasswordTokenExpires: resetTokenExpiry
        }
      });

      const resetLink = `${process.env.APP_URL}/reset-password/${resetToken}`;
      await sendMail(
        { name: user?.firstName, resetLink },
        email,
        "Password Reset Request",
        "resetPasswordTemplate"
      );

      ServerResponse.success(res, "Password reset email sent successfully", {
        resetLink
       });
    } catch (error) {
      next(error);
    }
  }

  public async resetPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const { token } = req.params;
      const { password } = req.body;

      const user = await prisma.user.findFirst({
        where: {
          resetPasswordToken: token,
          resetPasswordTokenExpires: {
            gt: new Date()
          }
        }
      });

      if (!user) {
         ServerResponse.notFound(res, "Invalid or expired reset token");
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      await prisma.user.update({
        where: { id: user?.id },
        data: {
          password: hashedPassword,
          resetPasswordToken: null,
          resetPasswordTokenExpires: null
        }
      });

       ServerResponse.success(res, "Password reset successfully",);
    } catch (error) {
      next(error);
    }
  }
}


export default new AuthController();