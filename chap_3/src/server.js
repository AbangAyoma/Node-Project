//const express = require('express'); older way importing in node js
import express from 'express';
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 5000  //this checks if theres a port env variable. process.env is used when we define a variable in our .env file

//Get the fiepath from the url of the current module

const __fileName = fileURLToPath(import.meta.url); //giving access to the filename
// get the dir name from the file name
const __dirName = dirname(__fileName);


//Middleware[ serves the html file from the /pub dir and also the express to serve all files from the  pub dir as static files
// any request for the css file will be resolve to the public dir ]
app.use(express.json())

app.use(express.static(path.join(__dirName,'../pub')));
//END POINTS

//Serving up the html file ffrom  the /pub directory.
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirName, 'pub', 'index.html'))
})

app.listen(PORT, ()=>console.log("\n...........Server has stated on port 5000.......\n"));

