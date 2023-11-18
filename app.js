import express from 'express';
import mainRoutes from './src/routes/mainRoutes.js';
import shopRoutes from './src/routes/shopRoutes.js';
import adminRoutes from './src/routes/adminRoutes.js';
import authRoutes from './src/routes/authRoutes.js';

const app = express();
const PORT = 8080

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

app.listen (PORT, () => { console.log(`Servidor corriendo en: http://localhost:${PORT}`) });
