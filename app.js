const express = require('express');
const handlebars = require('express-handlebars')
const path = require('path')
const app = express();

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('views', __dirname + '\\example');
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', function (req, res) {
  res.render('site/index');
});

app.listen(3000, function () {
  console.log('Server aberto na porta 3000!');
});
