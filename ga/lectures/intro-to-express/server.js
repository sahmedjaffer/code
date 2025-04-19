const express = require('express');
const validator = require('validator');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));
const PORT=3000;

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}....`)
});

app.use((req,res,next)=>{
    console.log('middleware 1')
    next();
    })
    
    app.use((req,res,next)=>{
        console.log('middleware 2')
        next();
        })

app.get('/',(req, res)=>{
    res.send('<h1>Hello Ya Mustafa Ya Mustafa</h1>')
})



app.get('/home',(req, res)=>{
    res.send('<p>Hello Ya Mustafa Ya Mustafa</p>')
})

app.get('/greet/:name',(req,res)=>{
    console.log(req.params.name);

  
        res.send(`<h1>Hello, ${req.params.name} </h1>`);
})

app.get('/hello', (req, res)=>{
    const name=req.query.name;
    const age=req.query.age;

    res.send(`Hello there, ${name}! I hear you are ${age} years old!!!`)


  })

app.get('/:itemNumber', (req, res) => {
    // Accessing the parameter
    console.log(req.params.itemNumber);  // Output could be 123, 456, etc.

    if (validator.isNumeric(req.params.itemNumber) === true){
            // Sending a response with the parameter
    res.send(`<h1>Item ${req.params.itemNumber}</h1>`);
    } else{
        res.send(`<h1>Item ${req.params.itemNumber} not valid!!!</h1>`);
    }
  
    // Sending a response with the parameter
   // res.send(`<h1>Item ${req.params.itemNumber}</h1>`);
  });




