let store = { drivers: [], passengers: [], trips: []}

let driverId = 0

class Driver {
  constructor(name) {
    this.id = driverId++
    this.name = name

    // insert current instance of driver into store object
    store.drivers.push(this)
  }
  trips() {
    return store.trips.filter(
      function (trip) {
        return trip.driverId === this.id
      }.bind(this)
    )
  }
}

console.log(Driver.prototype.trips.toString());

/////////////////////////

// FOUR WAYS TO INVOKE A FUNCTION

function Func() {

}

// 1
func() // function style invocation; `this` is global

// 2
const blah = new Object
blah.func = func
blah.func() // method invocation; `this` is `blah`

// 3
new func() // constructor invocation; `this` is fresh empty object that inherits
// the prototype of func

// 4
func.call(x)
func.bind(x)
func.apply(x) // explicit invocation, x === `this`, is *always* first arg of function
