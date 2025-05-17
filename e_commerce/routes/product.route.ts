import { Router } from "express";
import { ProductController } from "../controllers/product.controller";
import { checkAdmin } from "../middleware/auth.middleware";

const router = Router();

router.get("/",  ProductController.getAllProducts);
router.get("/:id",  ProductController.getProductById);
router.post("/",checkAdmin, ProductController.createProduct);
router.put("/:id", checkAdmin,ProductController.updateProduct);
router.delete("/:id", checkAdmin,ProductController.deleteProduct);

export default router;