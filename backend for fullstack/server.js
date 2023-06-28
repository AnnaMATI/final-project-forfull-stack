const express = require('express');
const app = express();
const routes = require ('./routes');
const bodyParser = require('body-parser');
const cors = require('cors')
const { addAbortSignal } = require('stream');
const { Sequelize } = require('sequelize');
app.use(cors())
app.use("/", express.static('./img'))

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express.json());
app.use("/" ,routes);
const expressListRoutes = require('express-list-endpoints');
const Routes = expressListRoutes(app);
Routes.forEach((Route) => {
    console.log(Route.path);
});


app.listen("5000")