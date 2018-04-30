const { MongoClient, ObjectID } = require('mongodb');

// Find data in MongoDB collection
MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    console.log('Unable to connect to MongoDB server');
  } else {
    console.log('Connect to MongoDB server');

    // DELETE
    // #1 deleteMany
    // db
    //   .collection('Todos')
    //   .deleteMany({
    //     text: 'Play games'
    //   })
    //   .then((resolve, error) => {
    //     if (resolve) {
    //       console.log(resolve);
    //     }
    //   });

    // #2 deleteOne
    // db
    //   .collection('Todos')
    //   .deleteOne({
    //     text: 'Play games'
    //   })
    //   .then((resolve, error) => {
    //     console.log(resolve);
    //   });

    // #3 findOneAndDelete
    db
      .collection('Todos')
      .findOneAndDelete({ completed: true })
      .then((resolve, reject) => {
        console.log(resolve);
      });
  }
});
