import React, { Component } from 'react';

// class definition
class Car {
    // constructor definition
    constructor() {
        // data members
        this.brand = "VoksWagon";
        this.model = "Beetal";
        this.type = "Compact Sedan";
        this.baseprice = 399999.00;
    }
    // member function
    display() {
        console.log("The car is: " + this.brand + " " + this.model);
        console.log("Type of car is: " + this.type);
        console.log("The base price is: INR " + this.baseprice);
    }
}



// obj declaration
const car1 = new Car(); //constructor call
// call the member function
// car1.display();


// learning inheritance
// base class of truck
class Truck {
    constructor(brand, model, type, baseprice) {
        this.brand = brand;
        this.model = model;
        this.type = type;
        this.baseprice = baseprice;
    }

    displayInfoOfTruck() {
        console.log("This truck is: " + this.brand + " " + this.model);
        console.log("Type of truck: " + this.type);
        console.log("Base Price is: INR " + this.baseprice);
    }
}
// derived class
class ElectricTruck extends Truck{
    constructor(brand, model, type, baseprice, battery_capacity, range){
        super(brand, model, type, baseprice);
        this.battery_capacity = battery_capacity;
        this.range = range;
    }

    // display member function definition
    displayInfoOfElectricTruck(){
        console.log("Battery capacity is: " + this.battery_capacity + " kwh.");
        console.log("Range: " + this.range + " kms.");
    }
}

//////////////////////////////////////////////////////
// base class obj declaration
// constructor call with arguments
const truck1 = new Truck("Ashok Leyland", "Heavy Duty", "Tipper", 1000000.00);
console.log("Fossil fuel truck info");
truck1.displayInfoOfTruck();

const truck2 = new ElectricTruck("Tesla", "Heavy Duty", "SUV Truck", 50000000, 60.5, 300);
console.log("Electric truck info");
truck2.displayInfoOfTruck();
truck2.displayInfoOfElectricTruck();

// class with getters and setters
class Bike {
    // constructor definition
    constructor() {
        // data member declaration
        this.brand = "";
        this.model = "";
        this.cc = "";
        this.price = 0.0;
    }

    // setter member declaration for brand
    setBrand(brand) {
        this.brand = brand;
    }
    // setter member declaration for model
    setModel(model) {
        this.model = model;
    }
    // setter member declaration for cc
    setCc(cc) {
        this.cc = cc;
    }
    // setter member declaration for price
    setPrice(price) {
        this.price = price;
    }

    // getter member functions
    getBrand() {
        return this.brand;
    }
    getModel() {
        return this.model;
    }
    getCc() {
        return this.cc;
    }
    getPrice() {
        return this.price;
    }
}

//obj declarations 
const bike1 = new Bike();
//call the setters
bike1.setBrand("BMW");
bike1.setModel("BMW model");
bike1.setCc(220);
bike1.setPrice(7000000);

// console.log("The bike is: " + bike1.getBrand() + " " + bike1.getModel());
// console.log("The cc is: " + bike1.getCc());
// console.log("Price is: INR " + bike1.getPrice());

// 

// component class definition
class ClassTest extends Component {


    render() {
        return (
            <div id='classtest'>
                <h1>Class Test</h1>
            </div>
        )
    }
}

export default ClassTest;