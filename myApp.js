require('dotenv').config();
let mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFoods: [String]
});

let Person = new mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  let person = new Person({name: "Andrea", age: 17, favoriteFoods: ["pizza", "Scaloppine", "Tiramisù"]})
  person.save((err, data) => {
    if(err) done(err);
    else done(null, data);
  });
};

/*let arrayOfPeople = [
  {name: "John", age: 27, favoriteFoods: ["pollo", "kebab"]},
  {name: "Francesco", age: 11, favoriteFoods: ["burro", "cibo"]},
  {name: "Peppe", age: 85, favoriteFoods: ["ragù", "trippa"]}
];*/

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) =>{
    if(err) done(err);
    else done(null,data);
  });
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
