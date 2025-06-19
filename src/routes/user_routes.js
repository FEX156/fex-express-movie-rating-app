import expres from "express";

const userRouter = expres.Router();

userRouter.get("/user", middleware, controller);

export default userRouter;
