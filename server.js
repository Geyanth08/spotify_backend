const express = require('express');

const app = express();
const port = 5000 || process.env.PORT;

app.listen(port, (req, res) => {
  console.log(`Server is Running at port ${port}`);
});
