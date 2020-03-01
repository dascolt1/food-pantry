const mongoose = require('mongoose');
const express = require('express');

var Schema = mongoose.Schema;

var postSchema = new Schema({
	post: String
});

var Blog = mongoose.model('Post', postSchema);