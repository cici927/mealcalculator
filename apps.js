
//declare dish variables for Diner constructor function
var steak = {
	name: "steak",
	cost: 20
}

var chicken = {
	name: "chicken",
	cost: 15
} 

//Diner constructor function,  creating Diner object using .this for project specifications
var Diner = function(name){
	//for diner names
	this.name = name;
	//empty array for pushing dish variables into
	this.dishes = [];
	//methods needed that will start at 0
	this.cost = 0;
	this.tax = 0;
	this.tip = 0;
} 

//prototype to extend Diner function for pushing dish variable to individual diner
Diner.prototype.addDish = function(dish) {
	this.dishes.push(dish)
}

//prototype to extend Diner constructor function to calculate total cost (method)
Diner.prototype.totalCost = function() {
	//for loop that adds all dishes for diner together
	for (var i = 0; i < this.dishes.length; i++) {
		this.cost += this.dishes[i].cost;
	}
	
}

//prototype to extend Diner constructor function to calculate tax method

Diner.prototype.totalTax = function() {
	//multiplying 0.15 (starting number for calculating tax) with total cost of diner to result in tax
	this.tax = 0.15 * this.cost;
	
}

//prototype to extend Diner constructor function to calculate tip method

Diner.prototype.totalTip = function() {
	//multiplying .25 (starting number for calculating tip) to total cost to result in tip
	this.tip = 0.25 * this.cost;
}

//prototype method to calculate total bill including tip and tax

Diner.prototype.finalBill = function() {
	//method to calculate total bill
	this.finalBill = this.cost + this.tax + this.tip;
	
}

//Bill constructor function
var Bill = function(diners) {
	this.diners = diners;
	
}

//extended prototype to Bill constructor function to calculate all three bills together by printing in console.log
Bill.prototype.billTotal = function() {
	//variables for final cost, tip and tax starting at 0
	var finalCost = 0

	var finalTip = 0

	var finalTax = 0
	//for loop that creates method in calculating all variables together 
	for (var i = 0; i < this.diners.length; i++) {
			finalCost += this.diners[i].cost;
			finalTip += this.diners[i].tip;
			finalTax += this.diners[i].tax;
	}
}


//creating three new instances of Diner constructor functions with diner names
var lily = new Diner("lily");

//pushing "steak" variable with addDish prototype
lily.addDish(steak);

var daisy = new Diner("daisy");
daisy.addDish(chicken);

var celia = new Diner("celia");

//Invoking new Diner constructor function with instance named "celia", pushing "steak" and "chicken" dish variables with addDish prototype

celia.addDish(steak);
celia.addDish(chicken);

//invoking totalCost, totalTax, totalTip and finalBill methods to "celia" instance

celia.totalCost();
celia.totalTax();
celia.totalTip();
celia.finalBill();

//Invoking same methods as above to the "lily" instance

lily.totalCost();
lily.totalTax();
lily.totalTip();
lily.finalBill();

//invoking same methods as above to the "daisy" instance

daisy.totalCost();
daisy.totalTax();
daisy.totalTip();
daisy.finalBill();

//creating an array with allDiners variable that includes the name of all three diners

var allDiners = [lily, daisy, celia];

//creating a new instance for the Bill constructor function with name of "Carrabas" (restaurant)

var carabbas = new Bill(lily);

//invoking new instance of Bill constructor function, along with billTotal prototype

carabbas.billTotal();

//prints out all diner objects 

console.log(carabbas);

