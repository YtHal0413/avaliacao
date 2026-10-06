const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => { res.json({ mensagem: "Rodando!" }); });

app.post('/usuarios', (req, res));

app.get('/usuarios', (req, res));

app.put('/usuarios/:id', (req, res));

app.delete('/usuario:id', (req, res));

app.listen(3000, () => { console.log('Porta 3000'); });