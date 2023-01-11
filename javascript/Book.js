const book = {
    name: "Software",
    number: 1999,
    auther: "Mohamamd",
    year: 2015,
    
}
function whatbook(book){
    console.log(`The Book ${book.name} was written by ${book.auther} in the year ${book.year}`);
}
whatbook(book)