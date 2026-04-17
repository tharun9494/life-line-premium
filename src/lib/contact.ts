// Hospital contact constants
export const HOSPITAL_PHONE_DISPLAY = "0877 222 8633";
export const HOSPITAL_PHONE_TEL = "tel:08772228633";

// WhatsApp link — opens chat with pre-filled appointment message
// Using +91 country code with the local number
export const WHATSAPP_NUMBER = "918772228633";
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello Life Line Hospital, I would like to book an appointment with Dr. Mahendra Reddy. Please share available time slots."
);
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const HOSPITAL_ADDRESS = "Reddy & Reddy's Colony, Tirupati, Andhra Pradesh 517501";
