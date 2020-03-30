const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use('/static', express.static('public'));

app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');

app.use(mainRoutes);
app.use('/projects', projectRoutes);


app.use((req, res, next) => {
  console.log('Page does not exist');
  const err = new Error('Page Not Found');

  err.status = 404;
  return next(err);
});

app.use((err, req, res, next) => {
  console.error('Error message:', err.message, ', Error status:', err.status)
  res.locals.error = err;
  res.render('error', err);
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});
