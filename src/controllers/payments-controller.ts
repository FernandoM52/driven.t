import { AuthenticatedRequest } from '@/middlewares';
import { PaymentBody } from '@/protocols';
import paymentsService from '@/services/payments-service';
import { Response } from 'express';
import httpStatus from 'http-status';

type RequestWithParams = AuthenticatedRequest & { query: { ticketId: number } };
type BodyPay = PaymentBody & RequestWithParams;

export async function getPaymentTicket(req: RequestWithParams, res: Response) {
  const { ticketId } = req.query;
  const { userId } = req;

  if (!ticketId) return res.sendStatus(httpStatus.BAD_REQUEST);

  const payment = await paymentsService.getPaymentTicket(userId, Number(ticketId));
  res.status(httpStatus.OK).send(payment);
}

export async function createPayment(req: BodyPay, res: Response) {
  const { userId } = req;
  const { body } = req;

  const payment = await paymentsService.createPayment(body, userId);
  res.status(httpStatus.OK).send(payment);
}