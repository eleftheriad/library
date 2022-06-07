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

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
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
        const btn = document.createElement('button');
        btn.classList.add("read-button");
        btn.textContent = myLibrary[i].read;
        
        const att = document.createAttribute("data-id");

        // Set the value of the class attribute
        att.value = i;

        // Add the class attribute to the first h1;
        element.setAttributeNode(att);

        element.appendChild(title);
        element.appendChild(author);
        element.appendChild(pages);
        element.appendChild(btn);

        library.appendChild(element)


        
        
    }
}
button = document.querySelector("#submit-btn");
button.addEventListener("click",() => { 
    const title = document.querySelector("#bookTitle").value;
    const author = document.querySelector("#bookAuthor").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#is_read");

    const book1 = new Book(title, author, pages, read.checked);
    addBookToLibrary(book1);
    displayLibrary();
});

const clear_books = function(){
    const books = document.querySelectorAll(".book");
    books.forEach(book => {
        book.remove();
    });
};
const read_button = document.querySelectorAll(".read-button");
read_button.forEach((read_btn) => {
    read_btn.addEventListener('click', () => {  
        if(read_btn.textContent == "Read")
            read_btn.textContent = "Not Read";
        else read_btn.textContent = "Read";
    });
});