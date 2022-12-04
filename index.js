const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

const PORT = 8080;

const db = require('./models');
db.sequelize.sync()
.then(() => {
    //console.log('Database is synced');
})
.catch((err) => {
    //console.log(err);
});

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
//app.use(cors());

require('./routes/route.js')(app);
//require('./routes/route.js');
app.use(express.static(__dirname + "/public"));


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/cors', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send('Hello World!');
});


// PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}.`);
});