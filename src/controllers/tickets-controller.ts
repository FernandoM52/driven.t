import ticketsService from '@/services/tickets-service';
import { Request, Response } from 'express';
import httpStatus from 'http-status';

export async function getTicketTypes(req: Request, res: Response) {
  try {
    const ticketTypes = await ticketsService.getTicketTypes();
    res.send(ticketTypes);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function getAllTickets(req: Request, res: Response) {
  try {
    const ticketTypes = await ticketsService.getAllTickets();
    res.send(ticketTypes);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

// export async function getAddressFromCEP(req: AuthenticatedRequest, res: Response) {
//   const { cep } = req.query as Record<string, string>;

//   try {
//     const address = await enrollmentsService.getAddressFromCEP(cep);
//     res.status(httpStatus.OK).send(address);
//   } catch (error) {
//     if (error.name === 'NotFoundError') {
//       return res.send(httpStatus.NO_CONTENT);
//     }
//   }
// }