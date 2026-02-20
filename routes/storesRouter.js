import { Router } from 'express';
import regions from '../data/stores.js';

const router = Router();

router.get('/', (req, res) => {
  res.render('layouts/stores', {
    title: 'Stores',
    activePage: 'stores',
    regions
  });
});


router.get('/:slug', (req, res) => {
  const region = regions.find(r => r.slug === req.params.slug);
  if (!region) {
    return res.status(404).send('Region not found');
  }

  res.render('layouts/store-details', {
    title: region.name,
    activePage: 'stores',
    region,
    stores: region.stores
  });
});

export default router;