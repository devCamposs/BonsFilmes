const express = require('express')
const path = require('path')
const app = express()

const moviesRouter = require('./routes/moviesRouter')
const genresRouter = require('./routes/genresRouter')
const actorRouter = require('./routes/actorRouter')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/movies', moviesRouter)
app.use('/genres', genresRouter)
app.use('/actors', actorRouter)


app.use(function(err, req, res, next) {
  // set locals, only providing error in development
 res.locals.message = err.message;
 res.locals.error = req.app.get('env') === 'development' ? err : {};

 res.status(err.status || 500);
  res.json(err);
});

app.listen(3001, ()=> console.log('servidor na porta 3001'))

module.exports = app
