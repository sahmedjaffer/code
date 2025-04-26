/*------------------------------- Starter Code -------------------------------*/

const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const Todo= require('./models/todo.js')

const connect = async () => {
  // Connect to MongoDB using the MONGODB_URI specified in our .env file.
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');

  // Call the runQueries function, which will eventually hold functions to work
  // with data in our db.
  await runQueries()

  // Disconnect our app from MongoDB after our queries run.
  await mongoose.disconnect();
  console.log('Disconnected from MongoDB');

  // Close our app, bringing us back to the command line.
  process.exit();
};


const createTodo =  async()=> {
    const todoData= {
        text:"Learn Spanish",
        isComplete:true
    }

const todo = await Todo.create(todoData);
console.log("New todo:", todo);
};

const findTodos = async () => {
    const todos = await Todo.find({})
    console.log("All Todos", todos)
}
const findSingleTodo = async () => {
    const todo = await Todo.findById("680cc84dc7bdb1848cf37590")
    console.log("Single Todos", todo)
}




const runQueries = async () => {
  console.log('Queries running.')
  await createTodo();
  await findTodos();
  await findSingleTodo();
  // The functions calls to run queries in our db will go here as we write them.
};

connect()
/*------------------------------ Query Functions -----------------------------*/
