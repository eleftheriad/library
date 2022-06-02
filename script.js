let myLibrary = [
/*    {
        "title": "purple",
        "author": "minivan",
        "pages": 7
    },
    {
        "title": "john",
        "author": "oliver",
        "pages": 72
    }*/
];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  // the constructor...
}

function addBookToLibrary(book) {
    // do stuff here
    myLibrary.push(book);
}
const library = document.querySelector(".library")

function displayLibrary(){
    clear_books();
    for (let i = 0; i < myLibrary.length; i++) {
        const element = document.createElement('div');
        element.classList.add("book");
        
        const title= document.createElement('div');
        title.classList.add("title");
        title.textContent = myLibrary[i].title;
        const author= document.createElement('div');
        author.classList.add("author");
        author.textContent = myLibrary[i].author;
        const pages= document.createElement('div');
        pages.classList.add("pages");
        pages.textContent = myLibrary[i].pages;

        element.appendChild(title);
        element.appendChild(author);
        element.appendChild(pages);

        library.appendChild(element)
        
    }
}
button = document.querySelector("#submit-btn");
button.addEventListener("click",() => { 
    const title = document.querySelector("#bookTitle").value;
    const author = document.querySelector("#bookAuthor").value;
    const pages = document.querySelector("#pages").value;

    const book1 = new Book(title, author, pages)
    addBookToLibrary(book1)
    displayLibrary()
});
const clear_books = function(){
    const books = document.querySelectorAll(".book");
    books.forEach(book => {
        book.remove();
    });
};
