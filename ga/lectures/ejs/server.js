// server.js

const express = require('express');
const logger = require('morgan')
const app = express();
app.use(logger('dev'));
/*
app.get('/', (req, res) => {
  res.send('The server is running!');
});
*/
app.listen(3000, () => {
  console.log('Listening on port 3000');
});

const inventory= [
    { name: 'Candle', qty: 4 },
    { name: 'Cheese', qty: 10 },
    { name: 'Phone', qty: 1 },
    { name: 'Tent', qty: 0 },
    { name: 'Torch', qty: 5 }
  ]

// server.js

app.get('/', (req, res) => {
    res.render('home.ejs', { 
      msg: 'Here is your inventory',
      favorateNumber:7,
      player: {
        name: "friend"
      },
      inventory: inventory,
    });
  });

// server.js
/*
app.get('/:itemId', (req, res) => {
    const index = req.params.itemId;
    // render show.ejs, and pass it a single item object 
    res.render('show.ejs', {
      item: inventory[index]
    });
  });
  */
  
  // server.js

  app.get('/:itemId', (req, res) => {
    const index = req.params.itemId;
    // render show.ejs, and pass it a single item object 
    res.render('show.ejs', {
      item: inventory[index]
    });
  });
  