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

async function getTicketById(id: number) {
  return await prisma.ticket.findUnique({
    where: {
      id,
    },
  });
}

async function updateTicket(id: number) {
  await prisma.ticket.update({
    data: {
      status: 'PAID',
    },
    where: {
      id,
    },
  });
}

async function getTicketTypeById(id: number) {
  return await prisma.ticketType.findFirst({
    where: {
      id,
    },
  });
}

const ticketsRepository = {
  getTicketTypes,
  getUserTicket,
  createTicket,
  getTicketById,
  updateTicket,
  getTicketTypeById
};

export default ticketsRepository;