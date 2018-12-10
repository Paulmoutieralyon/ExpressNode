const express = require('express');
const app = express();
const port = 3000;
const connection = require('./conf');

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,'public/')
  },
  filename :function(req,file,cb){
    cb(null,file.originalname)
  }
})

const upload = multer({
  dest: 'tmp/',
  storage,
  limits :{
    fileSize : 3000000
  },
  fileFilter: (req,file,cb) =>{
    if(!file.mimetype.includes('image/png'))
    cb(new Error('Mauvais format de fichier'))

    cb(null,true);
 }
})

const fs = require('fs');

app.post('/monupload', upload.array('monfichier',3),(req,res) =>{
  console.log(req.files);
  res.end();
});
