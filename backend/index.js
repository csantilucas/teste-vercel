import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

const value = 0

// Permite requisições de qualquer origem
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express on Vercel!' });
});

app.get('/test', (req, res) => {
  const valueRandon = Math.floor(Math.random() * 100);
  res.json({ message: `Numero aleatorio da api ${valueRandon}` });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});