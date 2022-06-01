let myLibrary = [
    {
        "title": "purple",
        "author": "minivan",
        "pages": 7
    },
    {
        "title": "john",
        "author": "oliver",
        "pages": 72
    }
];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

function displayLibrary(){
    const library = document.querySelector(".library")
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
displayLibrary()