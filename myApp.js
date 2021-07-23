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

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) =>{
    if(err) done(err);
    else done(null, data);
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, (err, personFound) => {
    if(err) done(err);
    done(null, personFound);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, (err, personFound) => {
    if(err) done(err);
    done(null, personFound);
  });
};

const findPersonById = (personId, done) => {
  Person.findById(personId, (err, personFound) => {
    if(err) done(err);
    done(null, personFound);
  })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId, (err, personFound) => {
    if(err) done(err);
    personFound.favoriteFoods.push(foodToAdd);
    personFound.save((errSave, dataSave) => {
      if(errSave) done(errSave);
      done(null, dataSave);
    });
  });

};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, (err, data) => {
    if(err) done(err);
    done(null, data);
  });

};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err, data) => {
    if(err) done(err);
    done(null, data);
  });
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({name: nameToRemove}, (err, data) => {
    if(err) done(err);
    done(null, data);
  });
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
  Person
    .find({favoriteFoods: foodToSearch})
    .sort({name: 1}).limit(2).select({age: 0})
    .exec((err, data) => {
      if(err) done(err);
      done(null, data);
    });
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
