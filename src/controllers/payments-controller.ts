import { AuthenticatedRequest } from '@/middlewares';
import { PaymentBody, TicketId } from '@/protocols';
import paymentsService from '@/services/payments-service';
import { Response } from 'express';
import httpStatus from 'http-status';

type RequestWithParams = AuthenticatedRequest & { query: { ticketId: number } };
type BodyPay = PaymentBody & RequestWithParams;

export async function getPaymentTicket(req: RequestWithParams, res: Response) {
  const { ticketId } = req.query;
  const { userId } = req;

  if (!ticketId) return res.sendStatus(httpStatus.BAD_REQUEST);

  try {
    const payment = await paymentsService.getPaymentTicket(userId, ticketId);
    res.send(payment);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function createPayment(req: BodyPay, res: Response) {
  const { userId } = req;
  const { body } = req;

  try {
    const payment = await paymentsService.createPayment(body, userId);
    res.status(httpStatus.OK).send(payment);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}