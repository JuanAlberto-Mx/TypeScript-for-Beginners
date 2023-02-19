"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Create a new User with values.
 */
let user = {
    name: "Albert",
    age: 37,
    id: 1,
    email: "jahm.developer@gmail.com"
};
/**
 * Renaming the properties of the User interface
 */
let { name: userName, age: userAge, id: userId, email: userEmail } = {
    name: "Richard",
    age: 20,
    id: 2,
    email: "rahs.developer@gmail.com"
};
/**
 * Creating a list of users.
 */
let users = [
    {
        name: "Albert",
        age: 37,
        id: 1,
        email: "jahm.developer@gmail.com"
    },
    {
        name: "Richard",
        age: 20,
        id: 2,
        email: "rahs.developer@gmail.com"
    }
];
// Printing the second user of the list
console.log(users[1]);
/**
 * Creating a list of users assigning a name to each index.
 * In case we need to set an alias for the rest of elements it is necessary
 * to use the "...<alias>".
 */
let [user1, user2, ...restUsers] = [
    { name: "Albert", age: 37, id: 1, email: "jahm.developer@gmail.com" },
    { name: "Richard", age: 20, id: 2, email: "rahs.developer@gmail.com" },
    { name: "Grey", age: 31, id: 3, email: "gsl.developer@gmail.com" },
    { name: "John", age: 19, id: 4, email: "johnny.developer@gmail.com" },
];
// Printing the second user of the list created.
console.log(user2);
// Printing the rest of elements in the user list
console.log(restUsers);
// Printing the rest of the elements by using a Map filter
restUsers.forEach((user) => console.log(user));
/**
 * Creating an employee variable with values.
 */
let employee = {
    name: "Albert",
    id: 1,
    email: "jahm.developer@gmail.com",
    salary: 1000
};
