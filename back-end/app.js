import express from 'express';
import config from './config.js';
import './routes/search.js';
import {searchAPI} from './routes/routes.js';


const app = express();
app.use((req, res, next)=>{
  res.set('ok', 'true');
  next();
});

app.get('/', (req, res)=>{
  const data = {
    status: true,
    data: {}
  }
  res.json(data);
});

app.use('/search', searchAPI);


app.listen(config.PORT, ()=>{
  console.log(`App running in port ${config.PORT}...`);
});