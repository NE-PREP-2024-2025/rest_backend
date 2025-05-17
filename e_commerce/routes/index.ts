import { Router } from "express";
import AUthRoutes from "./auth.route";
import ProductRoutes from "./product.route";
import OrderRoutes from "./order.route";
import userRouter from "./user.route";

const router = Router();

// auth routes
router.use("/auth", AUthRoutes
    /*
        #swagger.tags = ['Auth']
        #swagger.security = [] 
    */
)
router.use("/user", userRouter
  /*
      #swagger.tags = ['Users']
      #swagger.security = [{
              "bearerAuth": []
      }] 
  */
)
router.use("/orders", OrderRoutes
  /*
      #swagger.tags = ['Order']
      #swagger.security = [{
              "bearerAuth": []
      }] 
  */
)
router.use("/products", ProductRoutes
  /*
      #swagger.tags = ['Product']
      #swagger.security = [{
              "bearerAuth": []
      }] 
  */
)


export default router;