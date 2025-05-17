import { NextFunction, Request, Response } from "express";
import prisma from "../prisma/prisma-client";
import ServerResponse from "../utils/ServerResponse";
import sendMail from "../utils/emailUtility";

export class OrderController {
  public static async getAllOrders(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const orders = await prisma.order.findMany({
        include: {
          user: true,
          orderItems: {
            include: {
              product: true,
            },
          },
        },
      });
      ServerResponse.success(res, "Orders Retrieved Successfully", orders);
    } catch (error) {
      next(error);
    }
  }

  public static async getOrderById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      //@ts-ignore
      const userId = req.user.id;
      const user=await prisma.user.findUnique({
        where:{
          id:userId
        }
      })
    
      const { id } = req.params;
      const order = await prisma.order.findUnique({
        where: { id },
        include: {
          user: true,
          orderItems: {
            include: {
              product: true,
            },
          },
        },
      });
      if(user?.role!="ADMIN"||user?.id!==order?.userId){
        ServerResponse.unauthorized(res,"You are not authorized to perform this action")
        return
      }

      if (!order) {
        ServerResponse.notFound(res, "Order not found");
        return;
      }

      ServerResponse.success(res, "Order Retrieved Successfully", order);
    } catch (error) {
      next(error);
    }
  }

  public static async createOrder(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      //@ts-ignore
      const reqUser = req.user;
      const userId = reqUser.id;
      const { orderItems } = req.body;

      // Calculate total amount in a single query
      const products = await prisma.product.findMany({
        where: {
          id: {
            in: orderItems.map((item: any) => item.productId),
          },
        },
      });

      // Calculate total amount
      const totalAmount = orderItems.reduce((total: number, item: any) => {
        const product = products.find((p) => p.id === item.productId);
        if (!product) {
          throw new Error(`Product with id ${item.productId} not found`);
        }
        return total + product.price * item.quantity;
      }, 0);

      // Create order in transaction
      const order = await prisma.$transaction(async (prisma) => {
        return await prisma.order.create({
          data: {
            user: {
              connect: { id: userId },
            },
            amount: totalAmount,
            status: "PENDING",
            orderItems: {
              create: orderItems.map((item: any) => ({
                productId: item.productId,
                quantity: item.quantity,
              })),
            },
          },
          include: {
            user: true,
            orderItems: {
              include: {
                product: true,
              },
            },
          },
        });
      });

      // Send email outside transaction
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (user && user.email) {
        await sendMail(
          {
            name: user.firstName,
            orderId: order.id,
            totalAmount: order.amount,
          },
          user.email,
          "Order Confirmation",
          "order-confirmation"
        );
      }

      ServerResponse.created(res, "Order Created Successfully", order);
    } catch (error) {
      next(error);
    }
  }

  public static async updateOrderStatus(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const order = await prisma.order.update({
        where: { id },
        data: { status },
        include: {
          user: true,
          orderItems: {
            include: {
              product: true,
            },
          },
        },
      });

      if (order.user.email) {
        await sendMail(
          {
            name: order.user.firstName,
            orderId: order.id,
            status: order.status,
          },
          order.user.email,
          "Order Status Update",
          "order-status-update"
        );
      }

      ServerResponse.success(res, "Order Status Updated Successfully", order);
    } catch (error) {
      next(error);
    }
  }

  public static async getOrdersByUser(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { userId } = req.params;
      const orders = await prisma.order.findMany({
        where: { userId },
        
      });

      ServerResponse.success(res, "User Orders Retrieved Successfully", orders);
    } catch (error) {
      next(error);
    }
  }
}
