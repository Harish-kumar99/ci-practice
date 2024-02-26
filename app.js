const express = require('express');
require('dotenv').config();
const homeRoutes = require('./routes/homeRoutes');
const userRoutes = require('./routes/userRoutes');
const { PORT } = require('./config/secret');


const app = express();

app.use(express.json());

// Routes
app.use('/', homeRoutes);
app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
