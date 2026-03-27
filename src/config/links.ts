export const LINKS = {
  whatsapp: "https://wa.me/554333254030",
  email: "mailto:inovarecebe@gmail.com",
  emailAddress: "inovarecebe@gmail.com",
  phone: "(43) 3325-4030",
  address: "Doutor Dimas de Barros, 155 — Londrina/PR",
} as const;

export const getWhatsAppLink = (message: string) =>
  `${LINKS.whatsapp}?text=${encodeURIComponent(message)}`;
