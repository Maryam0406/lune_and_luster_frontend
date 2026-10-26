// Sample products. Later this list will come from your backend (PostgreSQL) instead.
// categoryId matches the ids in categories.js.  addedAt = date added (used for "Newest").
// Put each photo in public/images/products/ using the file name written here.
const products = [
  { id: 1,  name: 'Initial Disc Necklace',       categoryId: 1, price: 6990,  isNew: true,  addedAt: '2026-10-20', image: '/images/products/initial-disc-necklace.webp' },
  { id: 2,  name: 'Dainty Letter Pendant',       categoryId: 1, price: 5490,  isNew: false, addedAt: '2026-09-02', image: '/images/products/dainty-letter-pendant.webp' },
];

export default products;