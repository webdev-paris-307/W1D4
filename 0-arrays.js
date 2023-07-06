const fridge = ["Tomatoes", "eggs", "milk"]

const betterFridge = [
	{
		name: "Tomatoes",
		quantity: 5,
	},
	{
		name: "Eggs",
		quantity: 4,
	},
	{
		name: "Milk",
		quantity: 1,
	},
]

// Adding something to the Array
console.log(fridge.push("Parmigiano"))

// Removing an element
console.log(fridge.pop())

let count = 0
for (let i = 0; i < betterFridge.length; i++) {
	// console.log(betterFridge[i])
	const food = betterFridge[i]
	count = count + food.quantity
	// count += betterFridge[i].quantity
}

console.log("total items in my fridge: ", count)

// for of loop

let newCount = 0
let food = "something"
for (const fridgeFood of betterFridge) {
	// food += fridgeFood.name
	newCount += fridgeFood.quantity
}

// console.log(food)
console.log(newCount)
// forEach

//  array.forEach((element) => {})
fridge.forEach((element) => {
	console.log(element)
})

const numberArray = [0, 1, 2, 3, 4, 5]

for (let i = 0; i < numberArray.length / 2; i++) {
	console.log(numberArray[i])
}

console.log("Matrix time")
const matrix = [
	// 0  1  2
	[0, 5, 9], //  0
	[5, 2, 8], //  1
	[74, -52, 1], //  2
]

console.log(matrix[2][1])
const lastElementofMyMatrix = matrix[2]
const firstElementInTheNestedArray = lastElementofMyMatrix[0]
console.log(firstElementInTheNestedArray)

// Nested loops, finding the highest number

let max = -Infinity
// let max = Infinity

for (const row of matrix) {
	// console.log("This is the row: ", row)
	for (const number of row) {
		// console.log(number)
		if (number > max) {
			// We can reverse number < max, if we want to find the lowest, starting at +Infinity
			console.log(`Current number: ${number}, max is currently: ${max}`)
			max = number
		} else {
			console.log(`${max} is bigger than ${number}`)
		}
	}
}

console.log("Max number in my matrix", max)

const newFridge = fridge
newFridge[0] = "Butter"

console.log(fridge, newFridge)

// let copy = []
// for (const element of fridge) {
// 	copy.push(element)
// }
const copy = [...fridge]
console.log(...fridge)

// fridge = []
copy.push("Nutella")
// Shallow copy
console.log(copy, fridge)

const newMatrix = [
	["Risk", "catan"],
	["Running", "Skate"],
	["Cinema", "Series"],
]
const shallowCopy = [...newMatrix]

// shallowCopy[0][0] = "Terraforming mars"

const deepCopy = structuredClone(newMatrix)

deepCopy[0][0] = "Terraforming mars"
console.table(newMatrix)
console.table(deepCopy)
