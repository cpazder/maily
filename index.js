const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.send({ bye: 'everyone' });
});

// heroku target https://aqueous-temple-37398.herokuapp.com/

// heroku git repo https://git.heroku.com/aqueous-temple-37398.git


const PORT = process.env.PORT || 5000;
app.listen(PORT);