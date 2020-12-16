const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config')
const cors = require('cors');



app.use(bodyParser.json()); 
app.use(cors());


const postRoute = require('./routes/postroute');

app.use('/posts', postRoute);

mongoose.connect(process.env.DB_CONNECTION,
{
    useNewUrlParser:true,
    useUnifiedTopology:true
    
},
() => console.log ('connected to db')
);


app.listen (
    3000, () => console.log('Server has started')
)