import { Router } from "express";
import { OrderController } from "../controllers/order.controller";
import { checkAdmin, checkLoggedIn } from "../middleware/auth.middleware";

const router = Router();

router.get("/",  checkAdmin,OrderController.getAllOrders);
router.get("/:id", checkLoggedIn, OrderController.getOrderById);
router.post("/",checkLoggedIn,  OrderController.createOrder);
router.patch("/:id/status",  checkAdmin,OrderController.updateOrderStatus);
router.get("/user/:userId",checkAdmin,  OrderController.getOrdersByUser);

export default router;