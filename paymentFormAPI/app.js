const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 5000;

//Express config
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Payment From API',
  });
});

//POST payment
app.post('/payment-form-api', async (req, res) => {
  let data = JSON.stringify(req.body);
  fs.writeFileSync(
    `./payments/paymentForm - ${new Date().getTime().toString()}.json`,
    data
  );
  res.json(req.body);
});

app.get('*', (req, res) => {
  res.redirect('back');
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}!`);
});
