import { Router } from "express";
import controllers from "../controllers";

const router = Router();

router
    .get("/", controllers.getCards)
    .get("/:id", controllers.getCards)
    .post("/", controllers.addCard)
    .delete("/:id", controllers.removeCard);

export default router;