import express from 'express';
import mainRoutes from './src/routes/mainRoutes.js';
import shopRoutes from './src/routes/shopRoutes.js';
import adminRoutes from './src/routes/adminRoutes.js';
import authRoutes from './src/routes/authRoutes.js';
import {middlewareError} from './src/middlewares/middlewareError.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

/* Configuración EJS */

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

app.use(middlewareError);

app.listen (PORT, () => { console.log(`Servidor corriendo en: http://localhost:${PORT}`) });
