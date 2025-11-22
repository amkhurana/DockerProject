const express = require('express');
const app = express();
const port = 5000;

app.get('/api', (req, res) => {
  res.json({ message: "Backend is running!" });
});

app.listen(port, () => console.log(`API running on port ${port}`));
