import 'dotenv/config';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import productsRouter from './routes/productsRouter.js';
import storesRouter from './routes/storesRouter.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// View engine
app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));

// Static files
app.use(express.static(join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('layouts/home', {
    title: 'Home',
    activePage: 'home'
  });
});

app.use('/products', productsRouter);
app.use('/stores', storesRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).send('<h1>404 – Page Not Found</h1><a href="/">Go Home</a>');
});

app.listen(PORT, () => {
  console.log(`✅ Willys server running at http://localhost:${PORT}`);
});