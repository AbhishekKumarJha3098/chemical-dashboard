const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors()); // Allow cross-origin requests for your React app

// Initialize a default color
let currentColor = 'blue';

// Endpoint to change the color
app.post('/change-color', (req, res) => {
  const { color } = req.body;
  currentColor = color;
  res.json({ message: 'Color changed successfully' });
});

// Endpoint to get the current color
app.get('/get-color', (req, res) => {
  res.json({ color: currentColor });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
