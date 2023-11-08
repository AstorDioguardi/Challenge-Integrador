const express = require('express');
const app = express();
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');

app.use(express.static('public'));

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);

app.listen (4000, () => console.log ("Servidor corriendo en http://localhost:4000"));
