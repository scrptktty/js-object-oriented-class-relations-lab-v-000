let store = { drivers: [], passengers: [], trips: []}

let driverId = 0
let passengerId = 0
let tripId = 0

class Driver {
  constructor(name) {
    this.id = driverId++
    this.name = name

    // insert current instance of driver into store object
    store.drivers.push(this)
  }
  // trips() {
  //   // saving the receiver (the object that trips is being called on)
  //   const the_driver = this
  //   return store.trips.filter(
  //     function (trip) {
  //       return trip.driverId === the_driver.id
  //     }
  //   )
  // }
  trips() {
  // fat arrow is useful for short functions that have one expression
  // (callbacks, iterator functions)
    return store.trips.filter(t => t.driverId === this.id)
  }
  passengers() {
    return this.trips().map( t => t.passenger())
  }
}

class Passenger {
  constructor(name) {
    this.id = passengerId++
    this.name = name
    store.passengers.push(this)
  }
  trips() {
    const the_passenger = this
    return store.trips.filter(
      function (trip) {
        return trip.passengerId === the_passenger.id
      }
    )
  }
  drivers() {
    return this.trips().map( t => t.driver())
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = tripId++
    if (driver) {
      this.driverId = driver.id
    }
    if (passenger) {
      this.passengerId = passenger.id
    }
    store.trips.push(this)
  }
  setDriver(driver) {
    this.driverId = driver.id
  }
  setPassenger(passenger) {
    this.passengerId = passenger.id
  }
  driver() {
    // lexically (its location in the code) bind the receiver
    // avoids dynamic binding of `this`
    const the_trip = this
    return store.drivers.find(
      function (driver) {
        return driver.id === the_trip.driverId
      }
    )
  }
  passenger() {
    const the_trip = this
    return store.passengers.find(
      function (passenger) {
        return passenger.id === the_trip.passengerId
      }
    )
  }
}
