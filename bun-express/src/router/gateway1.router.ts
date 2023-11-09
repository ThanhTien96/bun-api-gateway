import express from "express";
import { Gateway1Service } from "../controller/gateway1.controller";

const router = express.Router();

router.get('/:path', async (req, res) => {
    try {
        const response = await Gateway1Service.getService1(req.params.path);
        if(response.status === 200) {
            res.status(200).json(response.data)
        } else {
            res.status(404).json({message: 'Not Found!'})
        }
    } catch (err: Error | any) {
        res.status(500).json(err);
    }
});

export default router;
