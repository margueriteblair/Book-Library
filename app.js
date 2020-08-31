if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config() //.load() and.config() should in theory do very similar things
    //.parse() works as well
}

const express = require('express')
const app = express();
const expressLayouts = require('express-ejs-layouts');

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')//views folder is going to be server rendered views
app.set('layout', 'layouts/layout') //idea behind a layout file is that we don't have to duplicate everything, all our html templates will live in the layouts folder
app.use(expressLayouts);
app.use(express.static('public'));

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))//useNewUrlParser the mongo be default uses a different way of accesssing data in mongoDB which is currently deprecated
//this could be different based on if you have a new version of mongo db
app.use('/', indexRouter);

app.listen(process.env.PORT || 3000)