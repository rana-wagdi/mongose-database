const mongoose = require('mongoose');

// Connection URL

mongoose.connect('mongodb://localhost:27017/fruitsDB',  { useNewUrlParser: true }, { useUnifiedTopology: true })


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
    name: "APPLESS",
    rate: 1,
    review:"Yummy!"
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
    rate: 4,
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
orange.save();
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
      

        fruits.forEach(function(fruit){
            console.log(fruit)
            mongoose.connection.close();
        })
    }
})


//update document
Fruit.updateOne({_id:"603b08ecc495801edcc60ee6"}, {name: "Peach"}, function(err){
    if (err){
        console.log(err)
    } else {
        console.log("Successfully updated the document");
    }
})


Fruit.deleteOne({_id:"603c14e1a08a261d745fb080"}, function(err){
    if (err){
        console.log(err)
    } else {
        console.log("Successfully Delete the document");
    }
})

Person.deleteMany({name: "Rana"}, function(err){
    if (err){
        console.log(err)
    } else {
        console.log("Successfully Delete the document")
    }
})