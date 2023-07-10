import { createPayment, getPaymentTicket } from "@/controllers";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const paymentsRouter = Router();

paymentsRouter.use(authenticateToken);
paymentsRouter.post("/process", createPayment);
paymentsRouter.get("/", getPaymentTicket);

export { paymentsRouter };