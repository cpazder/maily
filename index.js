const express = require('express');
require('./services/passport');


const app = express();

require("./routes/authRoutes")(app);





const PORT = process.env.PORT || 5000;
app.listen(PORT);










// heroku target https://aqueous-temple-37398.herokuapp.com/
// heroku git repo https://git.heroku.com/aqueous-temple-37398.git