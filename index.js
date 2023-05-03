const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const Chefs=require('./data/chefsData.json');
// const chefs = require('./data/chefsData.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('the chefs are busy with cooking.')
});


app.get('/chefs', (req, res) => {
    res.send(Chefs);
})

app.listen(port, () => {
    console.log(`the chefs are busy with cooking on port:${port}`)
})