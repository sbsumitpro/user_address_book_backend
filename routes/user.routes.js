import express from "express";
import { UserContoller } from "../controller/user.controller.js";
import { validatorMiddleware } from "../middlewares/validator.middleware.js";

const router = express.Router();

const userContoller = new UserContoller();

router.post("/", validatorMiddleware,userContoller.create);
router.put("/", userContoller.update);
router.delete("/", userContoller.delete);
router.get("/", userContoller.get);

export default router;