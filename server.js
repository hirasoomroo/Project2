const express = require("express");
const exphbs = require('express-handlebars');
const session = require("express-session");

const routes = require("./controllers");
const { Rating, User } = require('./models');


const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serving css files into your handlebars templates
app.use('/css', express.static(__dirname + '/css'));
app.use(routes);
app.get('/', (req, res) => {
  res.render('homepage', { session: req.session });
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});