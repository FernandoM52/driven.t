import ticketsRepository from "@/repositories/tickets-repository";

async function getTicketTypes() {
  const result = await ticketsRepository.getTicketTypes();
  return result;
}

async function getAllTickets() {
  const result = await ticketsRepository.getAllTickets();
  return result;
}
const ticketsService = {
  getTicketTypes,
  getAllTickets
};

export default ticketsService;

// async function getAddressFromCEP(cep: string): Promise<AddressEnrollment> {
//   const result = await request.get(`${process.env.VIA_CEP_API}/${cep}/json/`);

//   if (!result.data || result.data.erro) {
//     throw notFoundError();
//   }

//   const { bairro, localidade, uf, complemento, logradouro } = result.data;

//   const address: AddressEnrollment = {
//     bairro,
//     cidade: localidade,
//     uf,
//     complemento,
//     logradouro,
//   };

//   return address;
// }