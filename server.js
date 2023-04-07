const express = require('express');
const app = express();
const port = 3000;
//Data from models
const countries = require('./models/countries');
const { log } = require('console');

 //!config
 app.set("view engine", "jsx");//sets the default view engine for your application to "jsx"
 app.engine("jsx", require("jsx-view-engine").createEngine());//sets up the jsx-view-engine as the engine for rendering .jsx files

 //!Middleware
 app.use(express.urlencoded({ extended: false }));//parses the data from the request

 //!Routes
 //home page
 app.get('/', (req, res) => {
    res.render('Home')
 })
 //list
app.get('/list', (req, res) => {
    res.render("List", {countries: countries})
})

app.get('/list/add', (req, res) => {
    res.render("Add")
})
//Post
app.post('/list/add', (req, res) => {
    countries.push(req.body);
    res.redirect('/list')
    // res.send(countries)
})
//details
app.get('/list/:id', (req, res) => {
    res.render('Show', {id: req.params.id, countries: countries})
})
app.get('/services', (req, res) => {
    res.send("<h1>Services Page</h1>")
})
app.get('/contact', (req, res) => {
    res.send("<h1>Contact us</h1>");
})
app.get('/about', (req, res) => {
    res.send("<h1>About us</h1>");
})
app.get("/career", (req, res) => {
  res.send("<h1>No Open Positions</h1>");
});
//not found page
app.get('*', (req, res) => {
    res.render('NotFound')
})



app.listen(port, (req, res) => {
    console.log('listening on port ' + port);
})