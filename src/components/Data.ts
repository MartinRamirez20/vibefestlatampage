import type { IconName } from './Icons';

export interface Stop { title: string; text: string }
export interface Include { icon: IconName; title: string; text: string }
export interface Plan { name: string; price: string; unit: string; items: string[]; cta: string; featured?: boolean }
export interface Audience { title: string; text: string }
export interface Faq { q: string; a: string }

export const stops: Stop[] = [
  { title: 'Aeropuerto El Dorado', text: 'Te recogemos apenas aterrizas, sin que tengas que resolver transporte por tu cuenta.' },
  { title: 'En ruta', text: 'Una comida te espera en el vehículo, directo hacia el lugar del concierto.' },
  { title: 'Durante el show', text: 'Mientras disfrutas cada canción, llevamos tus maletas a tu hotel, ya reservado por nosotros.' },
  { title: 'Fin del concierto', text: 'Te recogemos a la salida y te llevamos derecho al hotel.' },
  { title: 'Esa noche', text: 'Llegas a una comida servida y a descansar, sin nada pendiente por resolver.' },
];

export const includes: Include[] = [
  { icon: 'plane', title: 'Transporte aeropuerto–concierto', text: 'Recogida directa en El Dorado, sin pasar antes por el hotel.' },
  { icon: 'fork', title: 'Comida en el trayecto', text: 'Algo de comer camino al concierto, para que no llegues con hambre.' },
  { icon: 'bag', title: 'Gestión de equipaje', text: 'Tus maletas viajan directo al hotel mientras tú estás en el show.' },
  { icon: 'bed', title: 'Reserva de hospedaje', text: 'Elegimos tu hotel según presupuesto, o coordinamos con el que ya tengas.' },
  { icon: 'car', title: 'Transporte de regreso', text: 'Te recogemos a la salida del concierto y te llevamos directo al hotel.' },
  { icon: 'moon', title: 'Cena y descanso', text: 'Una comida te espera en el hotel al final de la noche.' },
];

export const plans: Plan[] = [
  { name: 'Esencial', price: '$150.000 COP', unit: 'por persona', cta: 'Elegir este plan',
    items: ['Transporte aeropuerto → concierto → hotel, ida y vuelta', 'Una comida en el trayecto de ida', 'Acompañamiento durante todo el recorrido'] },
  { name: 'Completo', price: '$320.000 COP', unit: 'por persona', cta: 'Elegir este plan', featured: true,
    items: ['Todo lo de Esencial', 'Gestión y entrega de equipaje en el hotel', 'Reserva de hospedaje coordinada por nosotros', 'Comida de bienvenida en el hotel'] },
  { name: 'Grupos y VIP', price: 'A la medida', unit: 'cotización personalizada', cta: 'Cotizar',
    items: ['Vehículo privado para tu grupo', 'Itinerario para varios conciertos o días', 'Coordinación completa con el hotel de tu elección'] },
];

export const audiences: Audience[] = [
  { title: 'Turista internacional', text: 'Aterrizas en Bogotá el mismo día del show y no quieres perder horas resolviendo logística en una ciudad que no conoces.' },
  { title: 'Viajero nacional', text: 'Vienes de otra ciudad de Colombia solo por el concierto y quieres que el viaje se sienta tan bien planeado como el show.' },
  { title: 'Grupos y planes especiales', text: 'Van varios amigos o familiares y prefieren que alguien más se encargue de los detalles del día.' },
];

export const faqs: Faq[] = [
  { q: '¿Qué pasa si mi vuelo se retrasa o se adelanta?', a: 'Ajustamos el punto de recogida a tu hora real de llegada, dentro de la ventana acordada, sin costo adicional.' },
  { q: '¿El hospedaje ya viene incluido o yo lo escojo?', a: 'Nosotros reservamos el hotel según tu presupuesto y preferencias. Si ya tienes uno, coordinamos toda la logística con ese hotel.' },
  { q: '¿Qué tan seguras van mis maletas?', a: 'Viajan con nuestro equipo, en un vehículo dedicado, directo a tu hotel mientras tú estás en el concierto.' },
  { q: '¿Funciona si voy a varios conciertos el mismo fin de semana?', a: 'Sí. Armamos un itinerario completo cuando vienes por más de un show.' },
  { q: '¿En qué ciudad operan?', a: 'Por ahora, exclusivamente en Bogotá.' },
  { q: '¿Con cuánta anticipación debo reservar?', a: 'Mientras más pronto mejor: así aseguramos transporte y disponibilidad de hotel para la fecha del concierto.' },
];