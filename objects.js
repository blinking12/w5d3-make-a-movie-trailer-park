//Literal Object
var food = {
    edible: true
}
food.edible = true
var pizza = Object.create(food)
pizza.edible = false
console.log(pizza)
console.log(food)


//New Object
var food = new Object()
food.edible = true
var tacos = Object.create(food)


// Constructor Function
var Food = function() {
    this.edible = true
    this.totalEaten = 0
    this.eat = function() {
        this.totalEaten++
        console.log('Now eating ' + this.type + ' 1 of ' + this.totalEaten)
    }
}
//these are instances of their master copy or template
var pizza1 = new Food()
pizza1.type = 'Taco Pizza'
console.log(pizza1)

var pizza2 = new Food()
pizza2.type = 'Margarita Pizza'
console.log(pizza2)

Food.prototype.calories = 1200

class Vehicle {
    constructor(make, model) {
        this.make = make
        this.model = model
        this.year

        this.setYear = this.setYear.bind(this)
    }

    setYear(year) {
        this.year = year + ' year'
    }

    drive(speed) {
        console.log(`${make} ${model} is driving ${speed}mph.`)
    }
}

class Toyota extends Vehicle {
    constructor(model) {
        super('Toyota', model)  //this needs done everytime, referrring to the parent constructor we are extending, a call to it's parent constructor
        // this.make = 'Toyota'
    }
}

var $4Runner = new Toyota('4Runner')
// $4Runner.setYear(2006)
$4Runner.year = 2006
console.log($4Runner)

var prius = new Toyota('Prius')
prius.year = 2008
console.log(prius)

class Person {
    constructor(name, height, weight) {
        this.name = name
        this.height = height
        this.weight = weight
    }
}
// class Athlete extends Person {
//     constructor(yearStarted, yearsPlayed, teamsPlayedFor) {
//         super()
//         this.yearStarted = yearStarted
//         this.yearsPlayed = yearsPlayed
//         this.teamsPlayedFor = teamsPlayedFor
//     }
//
// }
// class BaseballPlayer extends Athlete {
//     constructor(position, batAverage, rbi) {
//         super()
//         this.position = position
//         this.batAverage = batAverage
//         this.rbi = rbi
//     }
// }

var playerStats = new Person('Random Guy')
playerStats.name = 'Random Guy'
playerStats.height = '3feet 10inches'
playerStats.weight = '253lbs'
console.log(playerStats)


// class BaseballPlayer extends Person {
//     constructor(attributes) {
//         this.attributes = attributes
//     }
// }
//
// var player1 = new BaseballPlayer( {
//     battingAvg: 400
// })
//
// window.classAutoBind = function(context) {
//
// }
