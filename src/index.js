const express = require('express');
const app = express();

const port = 3333;

app.get('/', (req, res) => {
    res.send('Hello Express');
});

app.listen(port, () => console.log(`Your localhost is running at port ${port}`));