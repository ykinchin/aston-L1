// 1)
// Массивы в JS включают в себя такие структуры даннхы как СПИСКИ, СТЕКИ и ОЧЕРЕДИ
// "Неправильность" массивов в JS может проявляться в следующих особенностях:
// 1)В обычных массивах элементы обычно должны быть одного типа данных, например, целые числа или строки.
//   В JavaScript массивы могут содержать элементы различных типов данных.
// 2)Массивы могут использоваться как стеки, так и очереди, благодаря методам, позволяющим удалять и добавлять элементы как в конец, так и в начало массива.
// 3)Можно создавать "разреженные" массивы, в которых определенные индексы могут отсутствовать или содержать значение undefined.
// 4)Массивы унаследованы от объектов, что позволяет им иметь методы и свойства, не свойственные традиционным массивам.

// 2)
function logger() {
	console.log(`I output only external context: ${this.item}`)
}

const obj = { item: 'some value' }

const boundLogger = logger.bind(obj)

boundLogger()
logger.call(obj)
logger.apply(obj)

// 3.1)
const arr = [1, 2, 3, 4, 5]
const sum = arr.reduce((acc, curr) => acc + curr, 0)
console.log(sum) // 15

const strings = ['i', 'am', 'an', 'array', 'of', 'strings']
const commonString = strings.join(' ')
console.log(commonString) // 'i am an array of strings'

const numbers = [4, 6, 2, 9, 11, 44, 98, 3]
const max = Math.max(...numbers)
const min = Math.min(...numbers)
console.log(max, min) //98 2

// 3.2) Stack - LIFO
const stack = []

stack.push(1)
stack.push(2) // add an element to the end of the stack

let lastElement = stack.pop() // remove the last element and return it

// 3.3) Queue - FIFO
const shopQueue = []

shopQueue.push('Costumer 1')
shopQueue.push('Costumer 2')
shopQueue.push('Costumer 3') //  Add a costumer to the end of the queue

let removedElement = shopQueue.shift() // The first customer leaves the queue first
