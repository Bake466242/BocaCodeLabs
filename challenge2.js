const dogs = [{
    name: 'scully',
    breed: 'corgi'
},
{
    name: 'mulder',
    breed: "corgi"
},
{
    name: 'addie',
    breed: "aussie"
}
]
const result = dogs.filter(dog => dog.name == "addie")
console.log(result)