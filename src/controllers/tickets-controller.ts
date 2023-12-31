import { AuthenticatedRequest } from '@/middlewares';
import { TicketTypeId } from '@/protocols';
import ticketsService from '@/services/tickets-service';
import { Response } from 'express';
import httpStatus from 'http-status';

export async function createTicket(req: AuthenticatedRequest, res: Response) {
  const { ticketTypeId } = req.body as TicketTypeId;
  const { userId } = req;

  const ticket = await ticketsService.createTicket(ticketTypeId, userId);
  res.status(httpStatus.CREATED).send(ticket);
}

export async function getTicketTypes(req: AuthenticatedRequest, res: Response) {
  const ticketTypes = await ticketsService.getTicketTypes();
  res.send(ticketTypes);
}

export async function getUserTicket(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  const ticket = await ticketsService.getUserTicket(userId);
  res.send(ticket);
}