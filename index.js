const express = require('express');
const bodyParser = require('body-parser');
const productRouter = require('./routers/product.router');
const {setupDatabaseAssociation} = require('./models');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

setupDatabaseAssociation();

app.use('/products', productRouter);

// Error handling middleware
app.use((error, req, res, next) => {
  res.status(500).json({
    message: JSON.stringify(error),
  });
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
    });