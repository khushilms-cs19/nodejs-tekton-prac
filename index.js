//express boilerplate
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//importing the routes


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(port, () => {
  console.log('test to see if this works');
  console.log(`Example app listening at http://localhost:${port}`)
});
