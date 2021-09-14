const express = require('express');

// we might have ..... multiple express applications per node project

const app = express();

// route handler
app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.listen(5000);
