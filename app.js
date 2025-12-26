const express = require('express');
require('dotenv').config();
const app = express();

const PORT = process.env.P || 3000;

app.get('/', (req, res) => {
    res.send('all correct');
});

app.get('/health', (req, res) => {
    res.send('FINE');
});

app.listen(PORT, () => {
    console.log('app started', PORT);
});