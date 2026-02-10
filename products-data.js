/**
 * Class-Man | נתוני מוצרים וקטגוריות
 */
const PRODUCTS = {
  1: { id: 1, name: 'חולצת טריקו אומברה All The Way', price: 229, description: 'חולצת טריקו גברית עם אפקט אומברה. כותנה אורגנית.', image: 'images/products/shirts/product-1.png', features: ['כותנה אורגנית 100%', 'אפקט אומברה ייחודי'] },
  2: { id: 2, name: 'מכנסי ג\'ינס סליים', price: 349, description: 'מכנסי ג\'ינס גבריים בחתך סליים מודרני.', image: 'images/products/pants/product-2.png', features: ['ג\'ינס פרימיום', 'חתך סליים'] },
  3: { id: 3, name: 'ז\'קט עור משובח', price: 499, description: 'ז\'קט עור גברי קלאסי.', image: 'images/products/jackets/product-34.png', features: ['עור איכותי', 'עיצוב קלאסי'] },
  4: { id: 4, name: 'חולצת כפתורים אלגנטית', price: 279, description: 'חולצת כפתורים לגבר.', image: 'images/products/shirts/product-35.png', features: ['בד איכותי', 'מתאים למשרד'] },
  5: { id: 5, name: 'מעיל חורף קלאסי', price: 459, description: 'מעיל חורף גברי חם ואלגנטי.', image: 'images/products/jackets/product-34.png', features: ['מבודד', 'קלאסי'] },
  6: { id: 6, name: 'סוודר צמר רך', price: 349, description: 'סוודר צמר נוח ואופנתי.', image: 'images/products/sweaters/product-6.png', features: ['צמר איכותי', 'נוח'] },
  7: { id: 7, name: 'חולצת פולו קלאסית', price: 229, description: 'חולצת פולו גברית קלאסית.', image: 'images/products/shirts/product-1.png', features: ['פולו קלאסי', 'כותנה'] },
  8: { id: 8, name: 'חולצת טריקו V צווארון', price: 199, description: 'חולצת טריקו עם צווארון V.', image: 'images/products/shirts/product-1.png', features: ['צווארון V', 'נוח'] },
  9: { id: 9, name: 'חולצת אוקספורד', price: 299, description: 'חולצת אוקספורד גברית.', image: 'images/products/shirts/product-1.png', features: ['אוקספורד', 'קלאסי'] },
  10: { id: 10, name: 'חולצת טריקו מונטנה', price: 219, description: 'חולצת טריקו מונטנה.', image: 'images/products/shirts/product-1.png', features: ['טריקו', 'נוח'] },
  11: { id: 11, name: 'חולצת טריקו שרוולים ארוכים', price: 239, description: 'חולצת טריקו שרוולים ארוכים.', image: 'images/products/shirts/product-1.png', features: ['שרוולים ארוכים', 'כותנה'] },
  12: { id: 12, name: 'חולצת ז\'קטין קלה', price: 269, description: 'חולצת ז\'קטין קלה לגבר.', image: 'images/products/shirts/product-1.png', features: ['ז\'קטין', 'קל'] },
  13: { id: 13, name: 'מכנסי chino קלאסיים', price: 319, description: 'מכנסי chino קלאסיים.', image: 'images/products/pants/product-2.png', features: ['chino', 'קלאסי'] },
  14: { id: 14, name: 'מכנסי ג\'ינס רגולר', price: 329, description: 'מכנסי ג\'ינס רגולר.', image: 'images/products/pants/product-2.png', features: ['ג\'ינס', 'רגולר'] },
  15: { id: 15, name: 'מכנסי משרד אלגנטיים', price: 359, description: 'מכנסי משרד אלגנטיים.', image: 'images/products/pants/product-2.png', features: ['משרד', 'אלגנטי'] },
  16: { id: 16, name: 'מכנסי קרגו', price: 279, description: 'מכנסי קרגו פונקציונליים.', image: 'images/products/pants/product-16.png', features: ['קרגו', 'כיסים'] },
  17: { id: 17, name: 'מכנסי ג\'וגינס פאיסלי כחול', price: 249, description: 'מכנסי ג\'וגינס פאיסלי.', image: 'images/products/pants/product-17.png', features: ['פאיסלי', 'כחול'] },
  18: { id: 18, name: 'מכנסי ג\'ינס מודרניים', price: 339, description: 'מכנסי ג\'ינס מודרניים.', image: 'images/products/pants/product-18.png', features: ['ג\'ינס', 'מודרני'] },
  19: { id: 19, name: 'מכנסיים קצרים קלאסיים', price: 229, description: 'מכנסיים קצרים קלאסיים.', image: 'images/products/pants/product-2.png', features: ['קצרים', 'קלאסי'] },
  20: { id: 20, name: 'ז\'קט בומבר', price: 429, description: 'ז\'קט בומבר גברי.', image: 'images/products/jackets/product-20.png', features: ['בומבר', 'חם'] },
  21: { id: 21, name: 'ז\'קט דניום', price: 389, description: 'ז\'קט דניום.', image: 'images/products/jackets/product-20.png', features: ['דניום', 'חזק'] },
  22: { id: 22, name: 'מעיל טרנץ\' קלאסי', price: 499, description: 'מעיל טרנץ\' קלאסי.', image: 'images/products/jackets/product-24.png', features: ['טרנץ\'', 'קלאסי'] },
  23: { id: 23, name: 'ז\'קט סווטשירט', price: 349, description: 'ז\'קט סווטשירט נוח.', image: 'images/products/jackets/product-24.png', features: ['סווטשירט', 'נוח'] },
  24: { id: 24, name: 'מעיל פאדי', price: 459, description: 'מעיל פאדי חם.', image: 'images/products/jackets/product-24.png', features: ['פאדי', 'חם'] },
  25: { id: 25, name: 'ז\'קט ספורט אלגנטי', price: 399, description: 'ז\'קט ספורט אלגנטי.', image: 'images/products/jackets/product-20.png', features: ['ספורט', 'אלגנטי'] },
  26: { id: 26, name: 'סוודר קאבל', price: 379, description: 'סוודר קאבל חם.', image: 'images/products/sweaters/product-27.png', features: ['קאבל', 'צמר'] },
  27: { id: 27, name: 'סוודר LOS ANGELES פסיפס', price: 319, description: 'סוודר פסיפס LOS ANGELES.', image: 'images/products/sweaters/product-27.png', features: ['פסיפס', 'אופנתי'] },
  28: { id: 28, name: 'סוודר LOS ANGELES פאיסלי', price: 399, description: 'סוודר פאיסלי LOS ANGELES.', image: 'images/products/sweaters/product-28.png', features: ['פאיסלי', 'אופנתי'] },
  29: { id: 29, name: 'סוודר אוברסייז', price: 339, description: 'סוודר אוברסייז נוח.', image: 'images/products/sweaters/product-29.png', features: ['אוברסייז', 'נוח'] },
  30: { id: 30, name: 'סווטשירט Need Money Not Friend', price: 299, description: 'סווטשירט Need Money Not Friend.', image: 'images/products/sweaters/product-30.png', features: ['סווטשירט', 'מודרני'] },
  31: { id: 31, name: 'סוודר כחול 23', price: 359, description: 'סוודר כחול 23.', image: 'images/products/sweaters/product-31.png', features: ['כחול', 'איכותי'] },
  32: { id: 32, name: 'סוודר קארדיגן', price: 429, description: 'סוודר קארדיגן קלאסי.', image: 'images/products/sweaters/product-28.png', features: ['קארדיגן', 'קלאסי'] },
  33: { id: 33, name: 'נעלי סניקרס לבנות קלאסיות', price: 349, description: 'נעלי סניקרס לבנות קלאסיות.', image: 'images/products/shoes/product-33.png', features: ['סניקרס', 'קלאסי'] },
  34: { id: 34, name: 'נעלי קז\'ואל ספורט', price: 299, description: 'נעלי קז\'ואל ספורט.', image: 'images/products/shoes/product-5.png', features: ['ספורט', 'נוח'] },
  35: { id: 35, name: 'נעלי בד קיץ', price: 249, description: 'נעלי בד קיץ.', image: 'images/products/shoes/f46badc0-6472-4330-b815-90197a5f5010 2.JPG', features: ['בד', 'קיץ'] },
  36: { id: 36, name: 'נעלי עור אלגנטיות', price: 429, description: 'נעלי עור אלגנטיות.', image: 'images/products/shoes/WhatsApp Image 2026-02-09 at 9.02.47 PM.jpeg', features: ['עור', 'אלגנטי'] },
  37: { id: 37, name: 'נעלי ריצה קלות', price: 379, description: 'נעלי ריצה קלות.', image: 'images/products/shoes/product-33.png', features: ['ריצה', 'קל'] },
  38: { id: 38, name: 'נעלי קנבס אורבניות', price: 279, description: 'נעלי קנבס אורבניות.', image: 'images/products/shoes/product-33.png', features: ['קנבס', 'אורבני'] },
  39: { id: 39, name: 'נעלי בוטים קצרים', price: 399, description: 'נעלי בוטים קצרים.', image: 'images/products/shoes/product-33.png', features: ['בוטים', 'קצר'] },
  40: { id: 40, name: 'נעלי לופטרס', price: 319, description: 'נעלי לופטרס אלגנטיות.', image: 'images/products/shoes/product-33.png', features: ['לופטרס', 'אלגנטי'] }
};

const CATEGORIES = {
  shirts: { id: 'shirts', name: 'חולצות', productIds: [1, 4, 7, 8, 9, 10, 11, 12], image: 'images/products/shirts/product-1.png', description: 'חולצות וטריקו לגבר' },
  pants: { id: 'pants', name: 'מכנסיים', productIds: [2, 13, 14, 15, 16, 17, 18, 19], image: 'images/products/pants/product-2.png', description: 'מכנסיים וג\'ינס' },
  jackets: { id: 'jackets', name: 'ז\'קטים ומעילים', productIds: [3, 5, 20, 21, 22, 23, 24, 25], image: 'images/products/jackets/product-24.png', description: 'ז\'קטים ומעילים' },
  sweaters: { id: 'sweaters', name: 'סוודרים', productIds: [6, 26, 27, 28, 29, 30, 31, 32], image: 'images/products/sweaters/product-27.png', description: 'סוודרים וסווטשירטים' },
  shoes: { id: 'shoes', name: 'נעליים', productIds: [33, 34, 35], image: 'images/products/shoes/product-33.png', description: 'נעליים גבריות' }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRODUCTS, CATEGORIES };
}
