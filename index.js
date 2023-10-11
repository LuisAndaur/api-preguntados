const express = require('express');
const bodyParse = require('body-parser');
const PREGUNTAS = require('./base-preguntas.json');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());

app.get('/api/preguntas', (req, res) => {
    res.status(200).json(PREGUNTAS);
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
