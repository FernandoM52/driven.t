import { TicketType } from "@prisma/client";
import { prisma } from "@/config";

async function createTicket(ticketTypeId: number, enrollmentId: number) {
  return await prisma.ticket.create({
    data: {
      status: "RESERVED",
      ticketTypeId,
      enrollmentId,
      updatedAt: new Date(Date.now())
    }
  });
}

async function getTicketTypes() {
  return prisma.ticketType.findMany();
}

async function getUserTicket(enrollmentId: number) {
  return prisma.ticket.findFirst({
    include: { TicketType: true },
    where: { enrollmentId }
  });
}

const ticketsRepository = {
  getTicketTypes,
  getUserTicket,
  createTicket
};

export default ticketsRepository;