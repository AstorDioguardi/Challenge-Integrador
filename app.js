import express from 'express';
import mainRoutes from './src/routes/mainRoutes.js';
import shopRoutes from './src/routes/shopRoutes.js';
import adminRoutes from './src/routes/adminRoutes.js';
import authRoutes from './src/routes/authRoutes.js';
import dotenv from 'dotenv';
import { resolve } from 'path';
import { middlewareError } from './src/middlewares/middlewareError.js';
import cookieParser from 'cookie-parser';
import session from 'express-session';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('public'));

/* Configuración EJS */
app.set('view engine', 'ejs');
app.set('views', resolve() + '/src/views');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(cookieParser());
app.use(session({
    secret: 'nico',
    resave: true,
    saveUninitialized: true
}));

// app.use('/', (req, res) => { 
//     console.log('holi') 
//     res.send(`hola`)});

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

app.use(middlewareError);

app.listen (PORT, () => { console.log(`Servidor corriendo en: http://localhost:${PORT}/home`) });