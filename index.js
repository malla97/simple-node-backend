const express = require('express');
const app = express();
const PORT = 8080;
const countriesRoute = require('./routes/countries');


app.use(express.json());
app.use('/countries', countriesRoute);

app.listen(
    PORT,
    () => console.log(`Listening on http://localhost:${PORT}`)
);
