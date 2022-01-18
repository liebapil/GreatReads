const Router = require('express').Router();
// const UserRouter = require('./UserRouter');
const BookRouter = require('./BookRouter');
const SaleRouter = require('./SaleRouter');
const CheckoutListRouter = require('./CheckoutListRouter');
const ReviewRouter = require('./ReviewRouter');
// Router.use('/users', UserRouter);
Router.use('/checkout', CheckoutListRouter);
Router.use('/books', BookRouter);
Router.use('/sales', SaleRouter);
Router.use('/reviews', ReviewRouter);
module.exports = Router;
