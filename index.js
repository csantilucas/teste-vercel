
import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express on Vercel!' });
});
 
app.listen(port, (e) => {

    if(!e){throw new Error}
    
  console.log(`Example app listening on port ${port}`);
});