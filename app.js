const mongoose = require('mongoose');

// Connection URL

mongoose.connect('mongodb://localhost:27017/fruitsDB', { useUnifiedTopology: true })


//insert Data 
const furitSchema = new mongoose.Schema ({
    name: String,
    rate: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", furitSchema);

const fruit = new Fruit ({
    name: "Apple",
    rate: 5,
    review:"Great fruit"
})

// fruit.save();

//insert Data 
const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ({
    name: "Rana",
    age: 23,
    
})

person.save();

const orange = new Fruit ({
    name: "Orange",
    rate: 3,
    review:"weird texture"
})
const kiwi = new Fruit ({
    name: "Kiwi",
    rate: 2,
    review:"The best fruit"
})
const banana = new Fruit ({
    name: "Banana",
    rate: 1,
    review:"To sour for me"
})

// Fruit.insertMany([
//     kiwi,
//     orange,
//     banana 
// ], function(err){
//      if (err){
//          console.log(err)
//      } else {
//          console.log("Succefully saved all the fruits ti fritsDB")
//      }
// })



// find document 

Fruit.find(function(err, fruits){
    if (err){
        console.log(err);
    }else {
        console.log(fruits);

        fruits.forEach(function(fruit){
            console.log(fruit.name)
        })
    }
})
