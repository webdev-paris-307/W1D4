const bottle = {
	//  key :  value ,
	capacity: 1000,
	brand: "Evian",
	cap: true,
	color: "yellow",
	nutrients: ["potassium", "magnesium"],
	drink: function () {
		console.log("Currently drinking from the bottle")
		this.capacity -= 200
	},
}

console.log(`My bottle is ${bottle.color}`)
console.log(`My bottle is ${bottle["color"]}`)

const something = "color"
console.log(bottle[something])

console.log("=====Looping")
for (const key in bottle) {
	console.log(key, bottle[key])
	if (key === "brand") {
		console.log("That's indeed an Evian bottle")
	}
}

console.log(bottle.capacity)
bottle.drink()
console.log(bottle.capacity)
bottle.drink()
console.log(bottle.capacity)

const newBottle = {
	capacity: 1000,
	brand: "Evian",
	cap: true,
	color: "yellow",
	nutrients: ["potassium", "magnesium"],
	drink: function () {
		console.log("Currently drinking from the bottle")
		this.capacity -= 200
	},
	brand: "Cristaline",
}
const vittelBottle = { ...bottle, brand: "Vittel" }
console.log(newBottle)
console.log(vittelBottle)
// Deleting a specific key
delete newBottle.color

const person = {
	name: "Bob",
	address: {
		city: "Paris",
		street: "Av des champs Elysees",
	},
	hobbies: ["Skate", "Bike"],
}

console.log(person.address.city)

for (const passion of person.hobbies) {
	console.log(passion)
}

// Object keys

const keysOfPerson = Object.keys(person)
console.log(keysOfPerson)

// Object values
const valuesOfPerson = Object.values(person)
console.log(valuesOfPerson)

// Object entries
const entriesOfPerson = Object.entries(person)
console.log(entriesOfPerson)
