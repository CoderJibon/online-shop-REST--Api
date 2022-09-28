//file include
const express = require('express');
const { getAllTag,createTag,tagUpdate,tagDelete } = require('../controllers/tagControllers');


// router init
const tagRouter = express.Router();   

//routes
tagRouter.route('/').get(getAllTag).post(createTag);
tagRouter.route('/:slug').put(tagUpdate).delete(tagDelete);


//module exports
module.exports = tagRouter;

