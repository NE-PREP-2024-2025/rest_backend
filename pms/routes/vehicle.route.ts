import express from "express";
import { VehicleController } from "../controllers/vehicle.controller";
import { checkAdmin, checkLoggedIn } from "../middleware/auth.middleware";
import { CreateVehicleDto, UpdateVehicleDto } from "../dtos/vehicle.dto";
import { validationMiddleware } from "../middleware/validator.middleware";
const router = express.Router();

// Get all vehicles
router.get("/", checkAdmin, VehicleController.getVehicles);
// Get vehicle by user
router.get("/user", checkLoggedIn, VehicleController.getVehicleByUserId);
// Get vehicle by ID
router.get("/:id", checkLoggedIn, VehicleController.getVehicle);

// Create new vehicle
router.post("/", checkLoggedIn, validationMiddleware(CreateVehicleDto), VehicleController.createVehicle);

// Update vehicle
router.patch("/:id", checkLoggedIn,validationMiddleware(UpdateVehicleDto,true),VehicleController.updateVehicle);

// Delete vehicle
router.delete("/:id", checkLoggedIn, VehicleController.deleteVehicle);

// Get vehicles by user
router.get("/plate_number/:vehiclePlateNumber", checkLoggedIn, VehicleController.getVehicleByPlateNUmber);

// Get vehicles by user


export default router;
