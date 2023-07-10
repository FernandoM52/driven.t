import ticketsRepository from "@/repositories/tickets-repository";
import enrollmentsService from "../enrollments-service";

async function getTicketTypes() {
  const result = await ticketsRepository.getTicketTypes();
  return result;
}

async function getUserTicket(userId: number) {
  const userEnrollment = await enrollmentsService.getUserEnrollment(userId);
  const result = await ticketsRepository.getUserTicket(userEnrollment.id);

  if (!result) {
    throw {
      name: "NotFoundError",
      message: "Enrollment not found"
    }
  }

  return result;
}

async function createTicket(ticketTypeId: number, userId: number) {
  const userEnrollment = await enrollmentsService.getUserEnrollment(userId);
  await ticketsRepository.createTicket(ticketTypeId, userEnrollment.id);

  return getUserTicket(userId);
}

const ticketsService = {
  getTicketTypes,
  getUserTicket,
  createTicket
};

export default ticketsService;