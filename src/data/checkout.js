export const SHIPPING_FEE = 350;

export const promoCodes = {
    LUNE10: { percent: 10 },
};

export const paymentMethods = [
    { key: 'cod', name: 'Cash on Delivery', available: true, note: 'Pay with cash upon delivery.' },
    { key: 'bank', name: 'Bank Transfer', available: true, note: 'We will send you our bank details on whatsapp. Your piece is made once the payment arrives' },
    { key: 'card', name: 'Credit/Debit Card', available: false, note: 'Online card payment is coming soon.' },
];