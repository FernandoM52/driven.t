import { getTicketTypes } from "@/controllers";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const ticketsRouter = Router();

ticketsRouter.use(authenticateToken)
  .get("/types", getTicketTypes)

export default ticketsRouter;