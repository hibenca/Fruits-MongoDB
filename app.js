const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const fruitSchema = new mongoose.Schema ({

  name: {
    type: String,
    required: [true, "Where is your fruit name bro?"]
  },
  rating:  {
    type: Number,
    min: 0,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit"
});

const kiwi = new Fruit ({
  name: "Kiwi",
  rating: 10,
  review: "Best fruit ever"
});

const banana = new Fruit ({
  name: "Banana",
  rating: 10,
  review: "Second best fruit ever"
});

// Fruit.insertMany([apple, kiwi, banana], function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// });

apple.save();


const personSchema = new mongoose.Schema ({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ({
  name: "John",
  age: 37
});

// person.save();

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    for (var i = 0; i < fruits.length; i++) {
      console.log(fruits[i].name);
    };

    mongoose.connection.close();

  }
});
