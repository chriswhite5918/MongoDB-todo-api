const { MongoClient, ObjectID } = require('mongodb');

// Find data in MongoDB collection
MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    console.log('Unable to connect to MongoDB server');
  } else {
    console.log('Connect to MongoDB server');
    // #1 fetch all
    db
      .collection('Todos')
      .find()
      .toArray()
      .then((resolve, reject) => {
        // resolve frist, then handle error
        if (resolve) {
          console.log(JSON.stringify(resolve, undefined, 2));
        } else {
          console.log('Encountered an error when fetching data from Todos');
        }
      });
    // #2 fetch specific item that contain someting
    db
      .collection('Todos')
      .find({
        text: 'To walk the dog'
      })
      .toArray()
      .then((resolve, reject) => {
        // resolve frist, then handle error
        if (resolve) {
          console.log(JSON.stringify(resolve, undefined, 2));
        } else {
          console.log('Encountered an error when fetching data from Todos');
        }
      });
    // #2 fetch specific item of ID
    db
      .collection('Todos')
      .find({
        _id: new ObjectID('5ae5a9b469b5290d2cc84c89')
      })
      .toArray()
      .then((resolve, reject) => {
        // resolve frist, then handle error
        if (resolve) {
          console.log(JSON.stringify(resolve, undefined, 2));
        } else {
          console.log('Encountered an error when fetching data from Todos');
        }
      });
    // #2 fetch the count of sepecific items
    db
      .collection('Todos')
      .find()
      .count()
      .then((resolve, reject) => {
        // resolve frist, then handle error
        if (resolve) {
          console.log(`Todos count: ${resolve}`);
        } else {
          console.log('Encountered an error when fetching data from Todos');
        }
      });
  }
});
