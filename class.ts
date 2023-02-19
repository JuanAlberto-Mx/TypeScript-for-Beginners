/**
 * Class that represents an Employee.
 */
class Employee {
    /**
     * Properties declared to represent the main aspects of an employee.
     * A property initialized by a constructor does not require the
     * admiration sign <!>. Otherwise, it is necessary.
     */
    id: number; // Public property
    #name: string; // Private property requires be declared with #
    address: string; // Public property
    position!: string; // It requires the admiration sign because is not initialized by the constructor.
    protected gender: string; // Protected property. It i visible at a class-level and via inheritance.

    /**
     * Constructor with three parameters to initialize the properties defined above.
     * @param id the identification number of the employee.
     * @param name the name of the employee.
     * @param address the address of the employee.
     * @param gender the gender of the employee.
     */
    constructor(id: number, name: string, address: string, gender: string) {
        this.id = id;
        this.#name = name;
        this.address = address;
        this.gender = gender;
    }

    /**
     * Method to obtain all the values of an employee.
     * Values are concatenated by using the operator "+".
     * It is not necessary the keyword <function>.
     */
    getCompleteData() : string {
        return this.id + " " + this.#name + " " + this.address + " " + this.position + " " + this.gender;
    }

    /**
     * Method to obtain the name and the position of an employee.
     * Values are located with the syntax `${value}` where it is not necessary
     * concatenation by using plus operator.
     */
    getNameAndPosition() : string {
        return `${this.#name} ${this.position}`;
    }

    /**
     * Method to obtain the value of name private property in all subclasses.
     * Private properties are not visible out of the class and inside subclasses.
     * This is the main reason to be declared protected.
     * @protected
     */
    protected getName() : string {
        return this.#name;
    }

    /**
     * Method to obtain the gender property of an employee.
     * The property is protected. So, we need to establish the same level of visibility.
     */
    protected getGender() : string {
        return this.gender;
    }

    /**
     * Method to obtain a random number between 1 and 100.
     * Static methods are accessible by using the class, i.e., Class.StaticMethod
     */
    static getRandomId() : number {
        return Math.floor(Math.random() * 100);
    }
}

/**
 * Class Developer to extends the functionality of Employee class.
 */
class Developer extends Employee {

    constructor(id: number, name: string, address: string, gender: string) {
        super(id, name, address, gender);
    }

    /**
     * Overriding the Employee's getName method to make it public
     * in the subclass Developer.
     */
    getName(): string {
        return super.getName();
    }

    /**
     * Overriding the Employee's getGender method to make it public
     * in the subclass Developer.
     */
    getGender(): string {
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