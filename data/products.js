const categories = [
  {
    slug: 'fruits',
    name: 'Fruits & Vegetables',
    emoji: '🍎',
    description: 'Tasty, colourful, and straight from the farm.',
    itemCount: 4,
    items: [
      { name: 'Gala Apples', emoji: '🍎', price: '24.90', origin: 'Sweden', organic: true, sale: false },
      { name: 'Baby Spinach', emoji: '🥬', price: '19.90', origin: 'Netherlands', organic: true, sale: false },
      { name: 'Carrots (1kg)', emoji: '🥕', price: '12.90', origin: 'Sweden', organic: false, sale: true },
      { name: 'Cherry Tomatoes', emoji: '🍅', price: '29.90', origin: 'Spain', organic: false, sale: false },
    ]
  },
  {
    slug: 'dairy',
    name: 'Dairy & Eggs',
    emoji: '🧀',
    description: 'Fresh dairy from trusted Swedish farms.',
    itemCount: 4,
    items: [
      { name: 'Arla Whole Milk (1L)', emoji: '🥛', price: '14.90', origin: 'Sweden', organic: false, sale: false },
      { name: 'Ekologiska Ägg (6-pack)', emoji: '🥚', price: '34.90', origin: 'Sweden', organic: true, sale: false },
      { name: 'Västerbotten Cheese', emoji: '🧀', price: '49.90', origin: 'Sweden', organic: false, sale: true },
      { name: 'Greek Yoghurt', emoji: '🍶', price: '22.90', origin: 'Denmark', organic: false, sale: false },
    ]
  },
  {
    slug: 'bakery',
    name: 'Bakery',
    emoji: '🥖',
    description: 'Baked fresh daily — breads, buns, and more.',
    itemCount: 3,
    items: [
      { name: 'Sourdough Loaf', emoji: '🍞', price: '39.90', origin: 'Sweden', organic: false, sale: false },
      { name: 'Cinnamon Buns (6-pack)', emoji: '🥐', price: '29.90', origin: 'Sweden', organic: false, sale: true },
      { name: 'Rye Crisp Bread', emoji: '🫓', price: '18.90', origin: 'Sweden', organic: false, sale: false },
    ]
  },
  {
    slug: 'beverages',
    name: 'Beverages',
    emoji: '🥤',
    description: 'Refreshing drinks for every occasion.',
    itemCount: 4,
    items: [
      { name: 'Ramlösa Sparkling Water', emoji: '💧', price: '12.90', origin: 'Sweden', organic: false, sale: false },
      { name: 'Tropicana Orange Juice', emoji: '🍊', price: '27.90', origin: 'USA', organic: false, sale: true },
      { name: 'Oatly Barista Oat Milk', emoji: '☕', price: '19.90', origin: 'Sweden', organic: false, sale: false },
      { name: 'Fever-Tree Tonic Water', emoji: '🫧', price: '24.90', origin: 'UK', organic: false, sale: false },
    ]
  }
];

export default categories;