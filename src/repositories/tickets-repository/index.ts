import { TicketType } from "@prisma/client";
import { prisma } from "@/config";

async function getTicketTypes() {
  return prisma.ticketType.findMany();
}

async function getAllTickets() {
  return prisma.ticketType.findMany();
}
const ticketsRepository = {
  getTicketTypes,
  getAllTickets
};

export default ticketsRepository;

// async function findWithAddressByUserId(userId: number) {
//   return prisma.enrollment.findFirst({
//     where: { userId },
//     include: {
//       Address: true,
//     },
//   });
// }

