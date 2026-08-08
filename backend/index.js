import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

// Permite requisições de qualquer origem
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express on Vercel!' });
});

app.get('/2', (req, res) => {
  res.json({ message: 'Hello from Express on Vercel 2!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});