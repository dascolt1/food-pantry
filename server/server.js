const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

var index = require('./routes/index');

app.listen(port, ()=>{
	console.log(`listening on port ${port}`);
})



app.use("/", index);