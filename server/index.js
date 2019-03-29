const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller');



const app = express();
app.use(bodyParser.json());




let {
    DB_CONNECTION_STRING,
    PORT
} = process.env;



massive(DB_CONNECTION_STRING, { scripts: __dirname + '/db' })
.then((dbInstance) => {
    app.set('db', dbInstance);
}).catch(err => {
    console.log(err)
})




app.get('/api/houses', controller.getAll)
app.post('/api/house', controller.newHouse)










app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})