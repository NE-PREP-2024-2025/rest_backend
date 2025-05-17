

import express from "express";
import { SlotOrderController } from "../controllers/slot-order.controller";
import { checkAdmin, checkLoggedIn } from "../middleware/auth.middleware";

const router = express.Router();

router.get("/", checkAdmin, SlotOrderController.getSlotOrders);

router.get("/:id", checkLoggedIn, SlotOrderController.getSlotOrderById);

router.post("/", checkLoggedIn, SlotOrderController.createSlotOrder);

router.patch(
  "/:id/status",
  checkAdmin,
  SlotOrderController.updateSlotOrderStatus
);

// Get slot orders by user
router.get(
  "/user/:userId",
  checkLoggedIn,
  SlotOrderController.getSlotOrdersBySlotCustomerId
);

export default router;
