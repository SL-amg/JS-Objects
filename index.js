/*****************************************************************
Part 1: Understanding Objects

You are given the task of representing a book in a library system. 
Use an object to model the book with the following information:

- Title: "JavaScript: The Definitive Guide"
- Author: "David Flanagan"
- Published Year: 2020
- Genre: "Programming"

Task 1) Create an object named 'book' using curly braces {} that includes the information above.
******************************************************************/

const book = {
    Title: "JavaScript: The Definitive Guide",
    Author: "David Flanagan",
    "Published Year": 2020,
    Genre: "Programming"
}

/*****************************************************************
Part 1: Understanding Objects

You are given the task of representing a book in a library system. 
Use an object to model the book with the following information:

- Title: "JavaScript: The Definitive Guide"
- Author: "David Flanagan"
- Published Year: 2020
- Genre: "Programming"
Task 2) Print the book’s title with its publish year. Access the book title using dot-notation, and access the publish year using bracket-notation.
******************************************************************/

console.log(book.Title);
console.log(book["Published Year"]);

//mishary solution
console.log(`${book.Title} - ${book["Published Year"]}`);

/*****************************************************************
Part 2: Modifying Objects
Consider you need to update the book's information and add a new property:
Task 3) Add a property 'pageCount' with the value 1096 to the 'book' object.

******************************************************************/

book.pageCount = 1096;
console.log(book);

/*****************************************************************
Part 2: Modifying Objects
Consider you need to update the book's information and add a new property:
Task 4) The book has been assigned an ISBN number. Add a property 'ISBN' with a value "978-1491952023".
******************************************************************/
book.ISBN = "978-1491952023";
console.log(book);

/*****************************************************************
Part 2: Modifying Objects
Consider you need to update the book's information and add a new property: 
Task 5) Modify the 'publishedYear' to 2021 as a new edition has been released.
******************************************************************/
book["Published Year"] = 2021;
console.log(book);

/*****************************************************************
Part 3: Advanced Object Operations 
Your libary system needs to handle multiple authors and include reviews for the book. 
Update the 'book' object to accommodate these requirements:
Task 6) Modify the 'author' property to hold an array of two authors: "David Flanagan" and "Another Author".
******************************************************************/

book.Author = ["David Flanagan", "Another Author" ];
console.log(book);

/*****************************************************************
Part 3: Advanced Object Operations 

Your library system needs to handle multiple authors and include reviews for the book. 
Update the 'book' object to accommodate these requirements:
Task 7) Add a 'reviews' property to the 'book' object, which will store an array of review objects. 
        Each review object should have 'reviewer' and 'comment' properties. 
        Start with one review: {reviewer: "Book Critic", comment: "A comprehensive guide to JavaScript."}.
******************************************************************/

book.reviews = []; // to creat a new array emplty
// console.log(book); to check my object
book.reviews.reviewer = "Book Critic";
// console.log(book); to check my object to this point
book.reviews.comment = "A comprehensive guide to JavaScript.";
console.log(book);

// mishary solution in one step ... 
// book.reviews= [
//     {
//         reviewer:"Book Critic",
//         comment: "A comprehensive guide to JavaScript."
//     },
//     {
//         reviewer:"Mishary",
//         comment: "awful book."
//     },
// ];

// to sho only value of reviewer
//console.log(book.reviews[0].reviewer); // to show value " book critic"
//console.log(book.reviews[1].comment); // to show value " awful book "