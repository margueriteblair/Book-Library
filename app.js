const express = require('express')
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.set('view-engine', 'ejs');
app.set('views', __dirname + '/views')//views folder is going to be server rendered views
app.set('layout', 'layouts/layout') //idea behind a layout file is that we don't have to duplicate everything, all our html templates will live in the layouts folder
app.use(expressLayouts);
app.use(express.static('public'));

app.listen(process.env.PORT || 3000)