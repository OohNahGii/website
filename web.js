const express = require('express');
const app = express();

app.use(express.static('pages'));
app.use(express.static('styles'));
app.use(express.static('images'));

app.listen(3000);