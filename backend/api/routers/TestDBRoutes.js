'use strict' ;

const express = require('express') ;
const DataTableController = require('../../controllers/TestDBController') ;
const router = express.Router();

const {getData} = DataTableController ;

router.get('/call',getData) ;

module.exports = {
    routes : router 
}