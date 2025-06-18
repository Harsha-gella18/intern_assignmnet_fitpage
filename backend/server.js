const express = require('express');
const cors = require('cors');
const reviewRoutes = require('./routes/reviewRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use('/api/reviews', reviewRoutes);

app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});