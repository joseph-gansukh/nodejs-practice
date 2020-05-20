exports.getAllProducts = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      products: 'products',
    },
  });
};

exports.createProduct = (req, res) => {
  res.status(201).json({
    status: 'success',
    data: {
      product: 'new product',
    },
  });
};
