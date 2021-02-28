const mongoose = require('mongoose');

// Connection URL

mongoose.connect('mongodb://localhost:27017/fruitsDB', { useUnifiedTopology: true })


//insert Data 
const furitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Please chexk your data entry , no name data specified!"]
    } ,
    rate: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", furitSchema);

const fruit = new Fruit ({

    rate: 40,
    review:"Great fruit"
})

 fruit.save();

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
    rate: 40,
    review:"Yummy"
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
       mongoose.connection.close();

        fruits.forEach(function(fruit){
            console.log(fruit)
        })
    }
})
