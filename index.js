const express = require('express');
const { resolve } = require('path');
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    res.sendFile(resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log('Server listening @ localhost:%d', PORT);
});
