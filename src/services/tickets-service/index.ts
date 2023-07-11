import ticketsRepository from "@/repositories/tickets-repository";
import enrollmentsService from "../enrollments-service";
import { notFoundError } from "@/errors";

async function getTicketTypes() {
  const result = await ticketsRepository.getTicketTypes();
  return result;
}

async function getUserTicket(userId: number) {
  const userEnrollment = await enrollmentsService.getUserEnrollment(userId);
  const result = await ticketsRepository.getUserTicket(userEnrollment.id);

  if (!result) throw notFoundError();

  return result;
}

async function createTicket(ticketTypeId: number, userId: number) {
  const userEnrollment = await enrollmentsService.getUserEnrollment(userId);
  await ticketsRepository.createTicket(ticketTypeId, userEnrollment.id);

  return getUserTicket(userId);
}

async function getTicketById(ticketId: number) {
  const ticket = await ticketsRepository.getTicketById(ticketId);
  if (!ticket) throw notFoundError();

  return ticket;
}

async function getTicketsTypeById(id: number) {
  return await ticketsRepository.getTicketTypeById(id);
}

const ticketsService = {
  getTicketTypes,
  getUserTicket,
  createTicket,
  getTicketById,
  getTicketsTypeById
};

export default ticketsService;