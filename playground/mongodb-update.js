const { MongoClient, ObjectID } = require('mongodb');

// Find data in MongoDB collection
MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    console.log('Unable to connect to MongoDB server');
  } else {
    console.log('Connect to MongoDB server');

    // UPDATE
    // #1 findOneAndUpdate
    db
      .collection('Todos')
      .findOneAndUpdate(
        {
          _id: new ObjectID('5ae5a9b469b5290d2cc84c89')
        },
        {
          $set: {
            completed: true
          }
        },
        { returnOriginal: false }
      )
      .then((resolve, reject) => {
        console.log(resolve);
      });
  }
});
