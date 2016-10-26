// 1. Make a class called Trailer that extends Movie
class Trailer extends Movie {

    // 2. Inside the class, add a constructor function that takes two arguments, a name and an id
    constructor(name, id) {

        // 3. Call the parent constructor function using the super function
        super()
        // 4. Assign a name and id instance property to the incoming name and id arguments
        this.name = name
        this.id = id
        // 5. This method will show the button on the screen, no changes necessary
        this.renderButton()
    }
}

// 6. Create four instances of the Trailer class, passing in the name of a film as the first argument and its corresponding YouTube ID as the second argument
var trailer1 = new Trailer('about our marriage...', '-8NM2o90oMM')
var trailer2 = new Trailer('the vlog is cancelled', 'V4PsrOonXic')
var trailer3 = new Trailer('something i\'ve been holding back', 'gx3fH2-FiCo')
var trailer4 = new Trailer('what\'s most important', 'S7HxFg3HWOg')


//Spaceship portion of the assignment.

// Make an object named spaceship1 using a JavaScript object literal. Include properties with this information: - Top speed of 2lyph (light years per hour) - Ship name of Galaxy Cruiser
// Include a method (a property that is set to an anonymous function) named launch that console logs your ship name + ' launching to infinity and beyond at ' + top speed + '!'. After you create your spaceship object, call the launch method to see the console log.
// Make three other spaceships with different speeds and names using the three other ways of making objects seen in the examples above.

// Object Literal
var spaceship1 = {
    topSpeed: 'lyph',
    name: 'Galaxy Cruiser',
    fly: function(speed) {
        console.log(this.name + ' launching to infinity and beyond at ' + speed + this.topSpeed + '!')
    }
}
spaceship1.fly(42)


// // Object New
var spaceship2 = new Object()
spaceship2.name = 'Galaxy Cruiser'
spaceship2.topSpeed = 'lyph'
spaceship2.fly = function(speed) {
    console.log(this.name + ' launching to infinity and beyond at ' + speed + this.topSpeed + '!')
}

spaceship2.fly(35)

// Constructor Function
var Spaceship3 = function() {
    this.name = 'Galaxy Cruiser'
    this.topSpeed = 'lyph'
    this.fly = function(speed) {
        console.log(this.name + ' launching to infinity and beyond at ' + speed + this.topSpeed + '!')
    }
}

var ship = new Spaceship3()

ship.fly(85)


// Class
class Spaceship4 {
    constructor() {
        this.name = 'Galaxy Cruiser'
        this.topSpeed = 'lyph'
    }

    fly(speed) {
        console.log(this.name + ' launching to infinity and beyond at ' + speed + this.topSpeed + '!')
    }
}

var ship = new Spaceship4()

ship.fly(55)
