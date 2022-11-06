const express = require("express");
const connectDB = require("./config/mongo");
require("dotenv").config();
const Person = require("./models/Person");
const app = express();

connectDB();

//Create and Save a Record of a Model

// let person = new Person({
//     name: 'ahmed',
//     age: 27,
//     favoriteFoods: ["lassagna", "apples"]
// })

// person.save(function (err, data) {
//     err ? console.log(err) : console.log(data)
// })

//Create Many Records with model.create()

// Person.create(
//     [
//         { name: "ahmed", age: 25, favoriteFoods: ["pasta", "Sandwich", "pizza"] },
//         { name: "nour", age: 18, favoriteFoods: ["pasta", "lassagna"] },
//         {
//             name: "Sirine", age: 27, favoriteFoods: ["lassagna", "Sandwich", "pizza"]
//         },
//     ],
//     (err, data) => (err ? console.log(err) : console.log(data))
// );


//Use model.find() to Search Your Database

// const findPerson = async (req, res) => {
//     const person = await Person.find({ name: "nour" });
//     console.log("person/People found : ", person);
// };

// findPerson();

//Use model.findOne() to Return a Single Matching Document from Your Database

// const findIdPerson = async (req, res) => {
//     const person = await Person.findOne({ favoriteFoods: "Sandwich" });
//     console.log("1st match found : ", person);
// };

// findIdPerson();



//Use model.findById() to Search Your Database By _id

// const findPersonById = async (req, res) => {
//     const person = await Person.findById("6334cb07f06987cd2b39d2a1");
//     console.log("person matching the ID : ", person);
// };

// findPersonById();


//Perform Classic Updates by Running Find, Edit, then Save

// const updatePerson = async (req, res) => {
//     const person = await Person.findById("6366ec27d6d1c96fceba7714");

//     if (person) {
//         console.log("person", person);
//         person.favoriteFoods.push("hamburger");
//         await person.save();
//     }
// };

// updatePerson();

//Perform New Updates on a Document Using model.findOneAndUpdate()

// const findUpdatePerson = async (req, res) => {
//     const person = await Person.findOneAndUpdate(
//         { name: "ali" },
//         { age: 20 },
//         {
//             new: true,
//             runValidators: true
//         });

//     if (person) {
//         console.log("person whose age has been updated : ", person);

//     }
// };

// findUpdatePerson();

//Delete One Document Using model.findByIdAndRemove

// const findOneRemovePerson = async (req, res) => {
//     await Person.findByIdAndRemove("6334cb07f06987cd2b39d2a1")
//         .then(response => {
//             console.log(response)
//         })
//         .catch(err => {
//             console.error(err)
//         })
// };

// findOneRemovePerson();



//MongoDB and Mongoose - Delete Many Documents with model.remove()

// const findRemovePerson = async (req, res) => {
//     await Person.remove(
//         { name: "nour" },
//         {
//             new: true,
//             runValidators: true
//         })
//         .then(response => {
//             console.log(response)
//         })
//         .catch(err => {
//             console.error(err)
//         })

// };

// findRemovePerson();

//Chain Search Query Helpers to Narrow Search Results

// const find = async (req, res) => {
//     await Person.find({ favoriteFoods: "pizza" })
//         .limit(2)
//         .sort({ name: 1 })
//         .select({ age: false })
//         .exec()
//         .then(docs => {
//             console.log(docs)
//         })
//         .catch(err => {
//             console.error(err)
//         })
// }

// find()






app.listen(process.env.PORT, (err) =>
    err ? console.log(err) : console.log(`this server is runnig on port ${process.env.PORT}`)
);