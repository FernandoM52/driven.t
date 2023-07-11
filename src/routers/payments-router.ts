import { createPayment, getPaymentTicket } from "@/controllers";
import { authenticateToken, validateBody } from "@/middlewares";
import { paymentSchema } from "@/schemas/payment-schema";
import { Router } from "express";

const paymentsRouter = Router();

paymentsRouter
  .all('/*', authenticateToken)
  .get("/", getPaymentTicket)
  .post("/process", validateBody(paymentSchema), createPayment);

export { paymentsRouter };