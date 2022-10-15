'use strict'

const utils = require('../utils') ;
const config= require('../../config') ;
const sql = require('mssql') ;

const getTestSql = async ()=>{
    try {
        let pool = await sql.connect(config.sql) ;
        const sqlQueries = await utils.loadSqlQueries('TestConnect') ;
        const list = await pool.request().query(sqlQueries.getAll) ;

        return list.recordset ;
    } catch (error) {
        return error.message ;
    }
}
module.exports = {
    getTestSql
}