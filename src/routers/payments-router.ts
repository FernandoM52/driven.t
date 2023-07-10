import { getPaymentTicket } from "@/controllers";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const paymentsRouter = Router();

paymentsRouter.use(authenticateToken);
paymentsRouter.post("/process",);
paymentsRouter.get("/", getPaymentTicket);

export { paymentsRouter };