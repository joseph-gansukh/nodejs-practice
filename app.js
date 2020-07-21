const express = require('express');
const morgan = require('morgan');
const productRouter = require('./routes/productRoutes');

const app = express();


// Morgan shows req details 
app.use(morgan('dev'));
app.use(express.json());

const userRouter = express.Router();
app.use('/api/v1/products', productRouter);
app.use('/api/v1/users', userRouter);

const getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      users: 'Users Data',
    },
  });
};


userRouter.route('/').get(getAllUsers);

app.listen(8000, () => {
  console.log('App running on port 8000');
});
