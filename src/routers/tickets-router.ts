import { getAllTickets, getTicketTypes } from "@/controllers";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const ticketsRouter = Router();

ticketsRouter.use(authenticateToken)
  .get("/types", getTicketTypes)
  .get("/", getAllTickets)

export default ticketsRouter;