const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const Chefs = require('./data/chefsData.json');
const Recipes = require('./data/recipes.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('the chefs are busy with cooking.')
});


app.get('/chefs', (req, res) => {
    res.send(Chefs);
});

app.get('/recipes', (req, res) => {
    res.send(Recipes);
})

app.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
    const selectedRecipes = Recipes.find(r => r.id === id);
    res.send(selectedRecipes)
})
app.get('/chefs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id)
    const chefData = Chefs.find(chef => chef.id === id);

    res.send(chefData);

    // if (id === 0) {
    //     res.send(Chefs)
    // }

})



app.listen(port, () => {
    console.log(`the chefs are busy with cooking on port:${port}`)
})