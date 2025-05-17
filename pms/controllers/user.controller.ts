import { NextFunction, Request, Response } from "express";
import prisma from "../prisma/prisma-client";
import ServerResponse from "../utils/ServerResponse";
import bcrypt from "bcrypt";
import { error } from "console";
import PaginationResponse from "../utils/paginationResponse";

export class UserController {
  public static async getAllUsers(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;
      const search = req.query.search;
      let filter: any = {};
      if (search) {
        filter.OR = [
          {
            firstName: {
              contains: search.toString().trim(),
              mode: "insensitive",
            },
          },
          {
            lastName: {
              contains: search.toString().trim(),
              mode: "insensitive",
            },
          },
          {
            email: {
              contains: search.toString().trim(),
              mode: "insensitive",
            },
          },
          {
            firstName: {
              contains: search.toString().split(" ")[0].trim(),
              mode: "insensitive",
            },
            lastName: {
              contains: search.toString().split(" ")[1]?.trim()??"",
            },
          },
          {
            lastName: {
              contains: search.toString().split(" ")[0].trim(),
              mode: "insensitive",
            },
            firstName: {
              contains: search.toString().split(" ")[1]?.trim() ?? "",
              mode:"insensitive"
            },
          },
        ];
      }
      const users = await prisma.user.findMany({
        skip: (page - 1) * limit,
        where: filter,
        take: limit,
      });
      const totalUsers = await prisma.user.count();
      PaginationResponse.success(
        res,
        "All Users Retrieved Successfully",
        users,
        totalUsers,
        Number(page),
        Number(limit)
      );
    } catch (error) {
      next(error);
    }
  }
  public static async getUserById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      });
      ServerResponse.success(res, "User Retrieved Successfully", user);
    } catch (error) {
      next(error);
    }
  }
  public static async createUser(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { firstName, lastName, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          password: hashedPassword,
          role: "CUSTOMER",
        },
      });
      ServerResponse.created(res, "User Created Successfully", user);
    } catch (error) {
      next(error);
    }
  }
  static async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = await prisma.user.findUnique({
        where: {
          id:req.user.id,
        },
      });
     

      if (user?.id != id && user?.role != "ADMIN") {
        ServerResponse.unauthorized(
          res,
          "You are not authorized to perform this action"
        );
        return;
      }

      const deletedUser = await prisma.user.delete({
        where: {
          id,
        },
      });

      ServerResponse.success(res, "User Deleted Successfully", deletedUser);
    } catch (error) {
      next(error);
    }
  }
  static async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { firstName, lastName, email } = req.body;
      const user = await prisma.user.update({
        where: {
          id,
        },
        data: {
          firstName,
          lastName,
          email,
        },
      });
      ServerResponse.success(res, "User Updated Successfully", user);
    } catch {
      next(error);
    }
  }
}
