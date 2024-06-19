const myLibrary = [];

function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks(bookLibrary) {
  const bookList = document.querySelector(".bookList");
  bookList.innerHTML = ""; // Clear previous content

  bookLibrary.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    const title = document.createElement("h4");
    title.textContent = `Title: ${book.title}`;
    title.classList.add("book-title");
    bookDiv.appendChild(title);

    const author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;
    author.classList.add("book-author");
    bookDiv.appendChild(author);

    const pages = document.createElement("p");
    pages.textContent = `Number of Pages: ${book.pages}`;
    bookDiv.appendChild(pages);

    const read = document.createElement("p");
    read.textContent = `Read: ${book.read ? "Yes" : "No"}`;
    bookDiv.appendChild(read);

    bookList.appendChild(bookDiv);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookForm");
  const modal = document.getElementById("sidebarForm");
  const btn = document.getElementById("newBookButton");

  // Open the modal when the button is clicked
  btn.onclick = function () {
    modal.style.display = "block";
  };

  // Handle form submission
  form.onsubmit = function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Extract values from the form
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    // Create a new book object
    const newBook = new Book(title, author, pages, read);

    // Add the book to the library array
    addBookToLibrary(newBook);

    // Display the updated library
    displayBooks(myLibrary);

    // Close the modal after form submission
    modal.style.display = "none";
  };

  // Initial display of books if any
  displayBooks(myLibrary);
});

displayBooks(myLibrary);
