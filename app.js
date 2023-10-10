const express = require('express');
const app = express();
const categoryRoutes = require('./routes/category_');
const menuRoutes = require('./routes/menu_')
const companyRoutes = require('./routes/company_')
const loginRoutes = require('./routes/login_')
const userRoutes = require('./routes/user_');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: '10mb' }));



app.use('/login',loginRoutes)
app.use('/category',categoryRoutes);
app.use('/user',userRoutes);
app.use('/menu',menuRoutes);
app.use('/company',companyRoutes);


module.exports = app;