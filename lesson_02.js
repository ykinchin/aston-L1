// 1)
let counter1 = {}

let counter2 = new Object()

let counter3 = Object.create(null)

function Counter() {}
let counter4 = new Counter()

let counter5 = Object.assign({}, {})

class Counter {}
let counter6 = new Counter()

// 2)
let counterCopy1 = Object.assign({}, counter)

let counterCopy2 = {}
for (let key in counter) {
	if (counter.hasOwnProperty(key)) {
		counterCopy[key] = counter[key]
	}
}

let counterCopy3 = { ...counter }

let counterCopy4 = JSON.parse(JSON.stringify(counter))

// 3)
function makeCount1() {} // function declaration

let makeCount2 = function () {} // function expression

let makeCount3 = () => {} // arrow function

const counter = { makeCounter4: function () {} } // object method

// (function(){})()  // IIFE

const makeCounter6 = function counterFunc() {} // NFE

// 4)
const obj1 = { here: { is: 'on', other: '3' }, object: 'Y' }

const obj2 = { here: { is: 'on', other: '2' }, object: 'Y' }

const deepEqual = (obj1, obj2) => {
	if (obj1 === obj2) {
		return true
	}

	if (
		typeof obj1 !== 'object' ||
		obj1 === null ||
		typeof obj2 !== 'object' ||
		obj2 === null
	) {
		return false
	}

	const keys1 = Object.keys(obj1)
	const keys2 = Object.keys(obj2)

	if (keys1.length !== keys2.length) {
		return false
	}

	for (let key of keys1) {
		if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
			return false
		}
	}

	return true
}

// 5)
function reverseStr1(str) {
	return str.split('').reverse().join('')
}

function reverseStr2(str) {
	return str.split('').reduce((reversed, char) => char + reversed, '')
}
