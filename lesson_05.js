//1)
let promiseTwo = new Promise((resolve, reject) => {
	resolve('a')
})

promiseTwo
	.then((res) => {
		return res + 'b'
	})
	.then((res) => {
		return res + 'с'
	})
	.finally((res) => {
		return res + '!!!!!!!'
	})
	.catch((res) => {
		return res + 'd'
	})
	.then((res) => {
		console.log(res)
	})

// abc

//2)
function doSmth() {
	return Promise.resolve('123')
}

doSmth()
	.then(function (a) {
		console.log('1', a) // 1 123
		return a
	})
	.then(function (b) {
		console.log('2', b) // 2 123
		return Promise.reject('321')
	})
	.catch(function (err) {
		console.log('3', err) // 3 321
	})
	.then(function (c) {
		console.log('4', c) // 4 undefined
		return c
	})

// 3)

function printIndex(arr) {
	arr.forEach((el, index) => {
		setTimeout(() => {
			console.log(index)
		}, index * 3000)
	})
}

const numbers = [10, 12, 15, 21]
printIndex(numbers)

// 4) Начиая с ECMAScript 2019 можно использовать await все асинхронной функции.
//    Может использоваться только в модульных скриптах, должен лежать в верхнем уровне модуля.

// 5)
function fetchUrl(url, retries = 5) {
	let attempts = 0

	function fetchWithRetry() {
		return new Promise((resolve, reject) => {
			fetch(url)
				.then((response) => {
					if (response.ok) {
						resolve(response.data())
					} else {
						throw new Error(`Ошибка: ${response.status}`)
					}
				})
				.catch((error) => {
					attempts++
					if (attempts < retries) {
						console.log(`Неудачная попытка ${attempts}. Повторная попытка...`)
						setTimeout(fetchWithRetry, 1000)
					} else {
						reject(
							`Превышено максимальное количество попыток (${retries}). Ошибка: ${error}`
						)
					}
				})
		})
	}

	return fetchWithRetry()
}

fetchUrl('https://google.com')
	.then((content) => {
		console.log(content)
	})
	.catch((error) => {
		console.error('Ошибка:', error)
	})
