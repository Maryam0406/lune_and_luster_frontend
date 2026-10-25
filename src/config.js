export const SITE = {
    brand: 'Lune & Luster',
    whatsapp: '94762593007',
    instagram: 'https://instagram.com/spamwithme.jpeg',
    email: 'maryamshahla05@gmail.com',
    showPrices: false,
};

export const whatsappLink = (
    message = "Hi Lune & Luster! I'd love to know more"
) =>
    `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;