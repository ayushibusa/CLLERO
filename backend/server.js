require('dotenv').config();
const express = require('express');
const cors = require('cors');

const demoRequestRoutes = require('./routes/demoRequest');
const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/demo-request', demoRequestRoutes);
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
  res.send('Cllero API is running (Email Only Mode)');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
