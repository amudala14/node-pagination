const express = require('express');
const userRoutes = require('./routes/userRoutes');
const globalErrorHandler = require('./controllers/errorController');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/users', userRoutes);

app.all('*', (req, res, next) => {
    return  res.status(404).json({ message: `${req.originalUrl} was not found.` })
});

app.use(globalErrorHandler);

module.exports = app;