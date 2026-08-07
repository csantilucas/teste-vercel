import express from 'express';
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express on Vercel!' });
});

app.get('/2', (req, res) => {
  res.json({ message: 'Hello from Express on Vercel 2!' });
});
 
app.listen(port, (e) => {   
  console.log(`Example app listening on port ${port}`);
});