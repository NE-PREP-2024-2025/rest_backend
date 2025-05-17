import express from "express";
import { SlotController } from "../controllers/slot.controller";
import { checkLoggedIn } from "../middleware/auth.middleware";

const router = express.Router();
// Get all slots
router.get("/", checkLoggedIn, SlotController.getSlots);
// Get slot by ID
router.get("/:id", checkLoggedIn, SlotController.getSlotById);
// Create new slot
router.post("/", checkLoggedIn, SlotController.createSlot);
//create many slots
router.post("/many", checkLoggedIn, SlotController.createManySlots);
// Update slot
router.patch("/:id", checkLoggedIn, SlotController.updateSlot);
// Delete slot
router.delete("/:id", checkLoggedIn, SlotController.deleteSlot);

export default router;
