import { Router } from 'express';
import categories from '../data/products.js';

const router = Router();


router.get('/', (req, res) => {
  res.render('layouts/products', {
    title: 'Products',
    activePage: 'products',
    categories
  });
});

router.get('/:slug', (req, res) => {
  const category = categories.find(c => c.slug === req.params.slug);
  if (!category) {
    return res.status(404).send('Category not found');
  }
  
  res.render('layouts/product-details', {
    title: category.name,
    activePage: 'products',
    category,
    items: category.items
  });
});

export default router;