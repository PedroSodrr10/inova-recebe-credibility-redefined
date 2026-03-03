export const LINKS = {
  whatsapp: "https://wa.me/5543991621000",
  email: "mailto:inovarecebe@gmail.com",
  emailAddress: "inovarecebe@gmail.com",
  phone: "(43) 99162-1000",
  address: "Doutor Dimas de Barros, 155 — Londrina/PR",
} as const;

export const getWhatsAppLink = (message: string) =>
  `${LINKS.whatsapp}?text=${encodeURIComponent(message)}`;
