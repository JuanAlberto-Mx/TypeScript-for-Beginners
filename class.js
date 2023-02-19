"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _name;
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Class that represents an Employee.
 */
class Employee {
    /**
     * Constructor with three parameters to initialize the properties defined above.
     * @param id the identification number of the employee.
     * @param name the name of the employee.
     * @param address the address of the employee.
     * @param gender the gender of the employee.
     */
    constructor(id, name, address, gender) {
        _name.set(this, void 0); // Private property requires be declared with #
        this.id = id;
        __classPrivateFieldSet(this, _name, name);
        this.address = address;
        this.gender = gender;
    }
    /**
     * Method login provided by the Login interface.
     * It is possible to access the User interface by using the alias created.
     */
    login() {
        return { name: "Albert", id: 19, email: "jahm.developer@gmail.com" };
    }
    /**
     * Method to obtain all the values of an employee.
     * Values are concatenated by using the operator "+".
     * It is not necessary the keyword <function>.
     */
    getCompleteData() {
        return this.id + " " + __classPrivateFieldGet(this, _name) + " " + this.address + " " + this.position + " " + this.gender;
    }
    /**
     * Method to obtain the name and the position of an employee.
     * Values are located with the syntax `${value}` where it is not necessary
     * concatenation by using plus operator.
     */
    getNameAndPosition() {
        return `${__classPrivateFieldGet(this, _name)} ${this.position}`;
    }
    /**
     * Method to obtain the value of name private property in all subclasses.
     * Private properties are not visible out of the class and inside subclasses.
     * This is the main reason to be declared protected.
     * @protected
     */
    getName() {
        return __classPrivateFieldGet(this, _name);
    }
    /**
     * Method to obtain the gender property of an employee.
     * The property is protected. So, we need to establish the same level of visibility.
     */
    getGender() {
        return this.gender;
    }
    /**
     * Method to obtain a random number between 1 and 100.
     * Static methods are accessible by using the class, i.e., Class.StaticMethod
     */
    static getRandomId() {
        return Math.floor(Math.random() * 100);
    }
}
_name = new WeakMap();
/**
 * Class Developer to extends the functionality of Employee class.
 */
class Developer extends Employee {
    constructor(id, name, address, gender) {
        super(id, name, address, gender);
    }
    /**
     * Overriding the Employee's getName method to make it public
     * in the subclass Developer.
     */
    getName() {
        return super.getName();
    }
    /**
     * Overriding the Employee's getGender method to make it public
     * in the subclass Developer.
     */
    getGender() {
        return super.getGender();
    }
}
// A new instance of the Employee class sending the required arguments.
let employee1 = new Employee(1, "Albert", "Mexico", "Male");
// Set the position of the employee.
employee1.position = "Developer";
// Printing the object created
console.log(employee1);
// Printing the result of the visible properties through the public methods.
console.log(employee1.getCompleteData());
console.log(employee1.getNameAndPosition());
// Printing the result of the protected properties through the public methods.
let developer1 = new Developer(2, "Richard", "Mexico", "Male");
console.log(developer1.getName());
console.log(developer1.getGender());
// Printing the value of a static method
console.log(Employee.getRandomId());
