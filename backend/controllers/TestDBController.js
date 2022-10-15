'use strict' ;

const testSQLData = require('../data/TestConnect') ;

const getData = async (req,res,next)=>{
    try {
        const data = await testSQLData.getTestSql() ;
        res.send(data) ;
    } catch (error) {
        res.status(400).send(error.message) ;
    }
}
module.exports = {
    getData
}