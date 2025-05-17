import { NextFunction, Request, Response } from "express";
import prisma from "../prisma/prisma-client";
import ServerResponse from "../utils/ServerResponse";

export class ProductController {
  static async getAllProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await prisma.product.findMany();
       ServerResponse.success(res, "Products Retrieved Successfully", products);
    } catch (error) {
      next(error);
    }
  }

  static async getProductById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const product = await prisma.product.findUnique({
        where: { id }
      });
      if (!product) {
         ServerResponse.notFound(res, "Product not found");
      }
       ServerResponse.success(res, "Product Retrieved Successfully", product);
    } catch (error) {
      next(error);
    }
  }

  static async createProduct(req: Request, res: Response, next: NextFunction) {
    try {
      //@ts-ignore
      const user= req.user;
      const { name, description, price, category,quantity } = req.body;
      const product = await prisma.product.create({
        data: {
          name,
          description,
          price,
          category,
          quantity,
          userId: user.id
        }
      });
       ServerResponse.created(res, "Product Created Successfully", product);
    } catch (error) {
      next(error);
    }
  }

  static async updateProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { name, description, price, category,quantity } = req.body;
      const product = await prisma.product.update({
        where: { id },
        data: {
          name,
          description,
          price,
          category,
          quantity,
        }
      });
       ServerResponse.success(res, "Product Updated Successfully", product);
    } catch (error) {
      next(error);
    }
  }

  static async deleteProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await prisma.product.delete({
        where: { id }
      });
       ServerResponse.success(res, "Product Deleted Successfully");
    } catch (error) {
      next(error);
    }
  }
}