// const MongoClient = require('mongodb').MongoClient;

// Using ES6 Destructuring,kind of like above
const { MongoClient, ObjectID } = require('mongodb');

// ObjectID is provided by MongoDB
let obj = new ObjectID();
console.log(obj);

// Insert a todo
MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  // if(error) {
  //     return console.log('Unable to connect to MongoDB server')
  // }
  // console.log('Connected to MongoDB server')

  // Same as above

  if (error) {
    console.log('Unable to connect to MongoDB server');
  } else {
    console.log('Connected to MongoDB server');

    // Insert todo collection
    db.collection('Todos').insertOne(
      {
        text: 'Something to do',
        completed: false
      },
      (error, result) => {
        if (error) {
          console.log('Unable to insert todo', error);
        } else {
          console.log('Inserted a todo');
          console.log(JSON.stringify(result.ops, undefined, 2));
        }
      }
    );
    // Insert user collection
    db.collection('Users').insertOne(
      {
        // _id: 001,   // Create custom id
        name: 'christina',
        age: 23,
        location: 'USA'
      },
      (error, result) => {
        if (error) {
          console.log('Unable to insert user');
        } else {
          console.log('Inserted a user');
          console.log(JSON.stringify(result.ops, undefined, 2));
        }
      }
    );
    db.close();
  }
});
