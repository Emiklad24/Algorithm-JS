//  objects are used when order is not needed. object have big O of O(1) for insertion, removal and accessing object properties. i.e they are really fast for manipulation

// Big O of Objects
// insertion - O(1)
// Removal - O(1)
// Searching - O(1)
// Accessing - O(1)

// Big O of object methods
// Object.keys(objName) - O(N)
// Object.values(objName) - O(N)
// Object.entries(objName) - O(N)
// hasOwnProperty - O(1) this function checks if a value-key pair exist by passing in a key to it. This functions returns a boolean (true or false ) eg instructor.hasOwnProperty("firstName") will return a true
// 

let instrucor = {
    firstName = "Emmanuel",
    isInstructor: true,
    favoriteNumbers: [1,2,3]
}

// Big O of Arrays
// insertion - It depends...
// Removal - It depends ...
// Searching - O(N)
// Accessing - O(1)

/*  Arrays /ordered list

    .They are used when order is needed. Arrays are strictly ordered

    .Performance cost of inserting into arrays vary: adding or inserting into the end of an array i.e array.push(), the big O is O(1), same for removing an item from the end of an array (array.pop()). 
    Meanwhile inserting or adding a data to the beginning of an array (array.shift()) is costly in performance as reindexing of previous array item is done alongside. the Big O is O(N). the same goes for removing an item (array.unshift())from the beginning of an array(re-indexing is done alondside)


*/

let names = ["Michael", "Emmanuel", "Andrea"]