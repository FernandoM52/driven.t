import { TicketType } from "@prisma/client";
import { prisma } from "@/config";

async function getTicketTypes() {
  return prisma.ticketType.findMany();
}

const ticketsRepository = {
  getTicketTypes
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