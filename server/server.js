const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

var index = require('./routes/index');

app.listen(port, ()=>{
	console.log(`listening on port ${port}`);
})



app.use("/", index);