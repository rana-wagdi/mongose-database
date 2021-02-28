const mongoose = require('mongoose');

// Connection URL

mongoose.connect('mongodb://localhost:27017/personsDB', { useUnifiedTopology: true })

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

//insert Document

// const insertDocument = function(db, callback){
//     //Get the documents collection
//     const collection = db.collection('fruits');
//     //Insert some documents
//     collection.insertMany([
//         {
//             name: "Apple",
//             score: 8,
//             review: "Great fruit"
//         },
//         {
//              name: "Orange",
//              score: 6,
//             review: "Kinda sour"
//         },
//         { 
//              name: "Banana",
//              score: 9,
//             review: "Great stuff!"
//         }
//     ], function(err, result) {
//         assert.equal(err, null);
//         assert.equal(3, result.result.n);
//         assert.equal(3, result.ops.length);
//         console.log("Inserted 3 documents into the collection");
//         callback(result);
//     });
// }

// find document 
const findDocuments = function(db, callback) {
    //Get the documents collection
    const collection = db.collection('fruits');
    //Find some documents
    collection.find({}).toArray(function(err, fruits){
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(fruits)
        callback(fruits)
    })
}