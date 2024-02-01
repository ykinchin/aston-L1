// 1)   1.let counter = {}

//      2.let counter = new Object()

//      3.let counter = Object.create(null)

//      4.function Counter() {}
//        let counter = new Counter();

//      5.let counter = Object.assign({}, {})

//      6.class Counter {}
//        let counter = new Counter()

// 2)   1.let counterCopy = Object.assign({}, counter)

//      2.let counterCopy = {};
//        for (let key in counter) {
//          if (counter.hasOwnProperty(key)) {
//              counterCopy[key] = counter[key];
//              }
//          }

//      3.let counterCopy = { ...counter }

//      4.let counterCopy = JSON.parse(JSON.stringify(counter))
