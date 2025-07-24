import express from 'express';

import {searchByKeyword,
  searchByWordClass,
  searchByMeaning,
  searchByUsageExample,
  searchByFrequency,
  searchBySemanticField,
  searchByKeyStartWith
} from '../db/db.js';
  
  

const app = express();
const searchAPI = express.Router();



searchAPI.get('/searchByKeyword/:key', async(req, res)=>{
  const params = req.params;
  const data = {
    status: true,
    data: {
      params,
      result: await searchByKeyword(params.key)
    }
  }
  res.json(data);
})


searchAPI.get('/searchByKeyStartWith/:key', async(req, res)=>{
  const params = req.params;
  const data = {
    status: true,
    data: {
      params,
      result: await searchByKeyStartWith(params.key)
    }
  }
  res.json(data);
})

//
searchAPI.get('/searchByWordClass/:WordClass', async(req, res)=>{
  const params = req.params;
  const {WordClass}= params;
  const data = {
    status: true,
    data: {
      result: await searchByWordClass(WordClass),
      params
    }
  }
  res.json(data);
});

searchAPI.get('/searchBySemanticField/:WordClass', async(req, res)=>{
  const params = req.params;
  const data = {
    status: true,
    data: {
      params
    }
  }
  res.json(data);
});


searchAPI.get('/searchByMeaning/:WordClass', async(req, res)=>{
  const params = req.params;
  const data = {
    status: true,
    data: {
      params
    }
  }
  res.json(data);
});


searchAPI.get('/searchByUsageExample/:UsageExample', async(req, res)=>{
  const params = req.params;
  const data = {
    status: true,
    data: {
      params
    }
  }
  res.json(data);
});

searchAPI.get('/searchByFrequency/:min/:max', async(req, res)=>{
  const params = req.params;
  let {min, max} = req.params;
  min = Number(min); max = Number(max);
  const data = {
    status: false,
    data: {
      params
    }
  }
  if(isNaN(min) || isNaN(max)){
    return res.json(data);
  }
  data.data.result = await searchByFrequency(min, max);
  data.status = true;
  res.json(data);
});

export {searchAPI};