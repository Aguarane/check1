var pets = [
  { name: "Max", type: "dog", bornOn: 2018  },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

const getAge = (pet)=> {
  return new Date().getFullYear() - pet.bornOn;
}

pets.forEach(pet => pet.age = getAge(pet))
const dogs = [];
dogs = pets.filter(pet=> pet.type == "dog")
console.log(dogs);
 let jasper;
jasper = pets.find(pet => pet.name == "jasper")

console.log("Jasper is " + jasper.age + " years old");