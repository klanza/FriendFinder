// NPM packages
const express = require('express');
const bodyParser = require('body-parser');

// Express App information
const app = express();
const PORT = process.env.PORT || 3000;

// Express data parsing
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routes
require('./routing/apiRoutes.js')(app);
require('./routing/htmlRoutes.js')(app);

// App listener to start server
app.listen(PORT, function() {
    console.log('App listening on PORT: ' + PORT);
});
