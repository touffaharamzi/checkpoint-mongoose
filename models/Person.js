const { Schema, model } = require("mongoose");

const personSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    age: Number,
    favoriteFoods: {
        type: Array,

    }
});

module.exports = Person = model("Person", personSchema);