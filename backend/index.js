const express = require('express')
const config = require('./config')
const app = express() ;
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = config.port ;

const dataTestDBRouter = require('./api/routers/TestDBRoutes')

app.get('/', (req, res) => {
  res.send('Web API')
})
app.use(cors());
app.use(bodyParser.json()) ;

//api router
app.use('/api',dataTestDBRouter.routes);

app.listen(PORT, () => {
  console.log(`Example app listening on PORT :`,PORT)
})