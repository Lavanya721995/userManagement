import express from "express";
import controller from "../controllers/user";
const router = express.Router();

router.get("/users/:id", controller.getUser);
router.delete("/users/:id", controller.deleteUser);
router.post("/users", controller.addUser);

export = router;
