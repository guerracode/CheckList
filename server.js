const express = require('express');
const path = require('path');
const session = require('express-session');

const routes = require('./routes');

const app = express();

const port = process.env.PORT || 3000;

app.set('trust proxy', 1);

app.use(
  session({
    secret: 'list secret',
    cookie: { maxAge: 3600000 },
    rolling: true,
    resave: true,
    saveUninitialized: false,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static')));

app.use('/', routes());

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});
