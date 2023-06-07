const express = require('express');
const app = express();
const adminRoutes = require('./routes/admin_');
const customerRoutes = require('./routes/customer_')

app.use('/admin',adminRoutes);
app.use('/customer',customerRoutes)
module.exports = app;