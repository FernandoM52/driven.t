import { getUserTicket, getTicketTypes, createTicket } from "@/controllers";
import { authenticateToken, validateBody } from "@/middlewares";
import { ticketTypeIdSchema } from "@/schemas/ticket-schema";
import { Router } from "express";

const ticketsRouter = Router();

ticketsRouter.use(authenticateToken);

ticketsRouter.post("/",validateBody(ticketTypeIdSchema) ,createTicket);
ticketsRouter.get("/types", getTicketTypes)
ticketsRouter.get("/", getUserTicket)

export { ticketsRouter };