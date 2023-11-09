import express from "express";
import { Gateway2Service } from "../controller/gateway2.controller.";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await Gateway2Service.getService1();
    return res.status(200).json(response.data);
  } catch (err) {
    return res.status(500).json(err);
  }
});

export default router;
