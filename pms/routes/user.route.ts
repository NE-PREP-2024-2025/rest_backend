import { checkAdmin, checkLoggedIn } from "../middleware/auth.middleware";
import { UserController } from "../controllers/user.controller";
import { Router } from "express";

const userRouter = Router()
userRouter.get("/", checkAdmin,UserController.getAllUsers)
userRouter.get("/:id", checkLoggedIn,UserController.getUserById)
userRouter.post("/",checkAdmin, UserController.createUser)
userRouter.delete("/:id", checkLoggedIn,UserController.deleteUser)
userRouter.put("/:id", UserController.updateUser)  
export default userRouter