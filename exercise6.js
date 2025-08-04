//  Create a json object variable for a book

const book = {
  title: "Watership Down",
  description:
    "An adventure into the lives and struggles of a group of rabbits searching for a new home.",
  author: "Richard Adams",
  pages: 544,
};

// print out to the console the object properties individually
console.log(book.title);
console.log(book.description);
console.log(book.author);
console.log(book.pages);

// print out to the console the object properties via the whole book object
for (key in book) {
  console.log(`${key}: ${book[key]}`);
}
// or
Object.entries(book).forEach(function ([key, value]) {
  console.log(`${key} : ${value}`);
});

// update the description of the book
book.description = `${book.description} It won many literary awards.`;
console.log(book.description);

// Create an array of 5 book objects

const books = [
  book,
  {
    title: "The Hobbit",
    description:
      "A hobbit named Bilbo Baggins is unexpectedly swept into an epic quest by the wizard Gandalf and a group of dwarves. Their goal: to reclaim the lost Dwarven kingdom of Erebor from the dragon Smaug.",
    author: "J.R.R. Tolkien",
    pages: 310,
  },
  {
    title: "The Martian",
    description:
      "An astronaut stranded on Mars uses science, engineering, and humor to survive while awaiting rescue.",
    author: "Andy Weir",
    pages: 387,
  },
  {
    title: "Machines Like Me",
    description:
      "In an alternate 1980s, a synthetic human named Adam disrupts a couple’s life, raising questions about love, ethics, and consciousness.",
    author: "Ian McEwan",
    pages: 320,
  },
  {
    title: "Galaxy in Flames",
    description:
      "As Horus launches his betrayal at Isstvan III, civil war erupts among the Space Marines in a turning point for the galaxy.",
    author: "Ben Counter",
    pages: 416,
  },
];
console.log(books);
