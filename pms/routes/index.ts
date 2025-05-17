import { Router } from "express";
import AUthRoutes from "./auth.route";
import userRouter from "./user.route";
import slotOrderRoutes from "./slot-order.route";
import slotRoutes from "./slot.route";
import vehicleRoutes from "./vehicle.route";


const router = Router();

// auth routes
router.use(
  "/auth",
  AUthRoutes
  /*
        #swagger.tags = ['Auth']
        #swagger.security = [] 
    */
);
router.use(
  "/user",
  userRouter
  /*
      #swagger.tags = ['Users']
      #swagger.security = [{
              "bearerAuth": []
      }] 
  */
);
 
router.use("/slot-orders", slotOrderRoutes
   /*
      #swagger.tags = ['Slot Orders']
      #swagger.security = [{
              "bearerAuth": []
      }] 
  */
);

router.use("/slots", slotRoutes
    /*
      #swagger.tags = ['Slots']
      #swagger.security = [{
              "bearerAuth": []
      }] 
  */
);
 
router.use("/vehicles", vehicleRoutes
   /*
      #swagger.tags = ['Vehicles']
      #swagger.security = [{
              "bearerAuth": []
      }] 
  */
);

export default router;
