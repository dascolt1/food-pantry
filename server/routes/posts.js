const express = require('express');
const posts = express.Router();
var Posts = require('../models/posts');

posts.get('/', (req, res, next) => {
	res.send('working');
})