import paymentsRepository from "@/repositories/payments-repository";
import ticketsService from "../tickets-service";
import enrollmentRepository from "@/repositories/enrollment-repository";
import { PaymentBody } from "@/protocols";
import ticketsRepository from "@/repositories/tickets-repository";

async function getPaymentTicket(userId: number, ticketId: number) {
  const ticket = await ticketsService.getTicketById(ticketId);
  const payment = await paymentsRepository.getPaymentByTicket(ticketId);
  const enrollment = await enrollmentRepository.getUserEnrollment(userId);

  if (enrollment.id !== ticket.enrollmentId) {
    throw {
      name: 'UnauthorizedError',
      message: 'This ticket is not associated with this user!',
    };
  }

  return payment;
}

async function createPayment(body: PaymentBody, userId: number) {
  const ticket = await ticketsService.getTicketById(body.ticketId);
  await getPaymentTicket(ticket.id, userId);

  const ticketType = await ticketsService.getTicketsTypeById(ticket.ticketTypeId);
  const payment = await paymentsRepository.createPayment(body.cardData, body.ticketId, ticketType.price);

  await ticketsRepository.updateTicket(body.ticketId);

  return payment;
}


const paymentsService = {
  getPaymentTicket,
  createPayment
}

export default paymentsService;