import { getUserTicket, getTicketTypes, createTicket } from "@/controllers";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const ticketsRouter = Router();

ticketsRouter.use(authenticateToken);

ticketsRouter.post("/", createTicket);
ticketsRouter.get("/types", getTicketTypes)
ticketsRouter.get("/", getUserTicket)

export { ticketsRouter };