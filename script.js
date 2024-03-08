const search = () => {
    const searchbar = document.getElementById("search-book").value.toUpperCase();
    const shelf = document.getElementById("book-list");
    const books = document.querySelectorAll(".book");

    books.forEach(book => {
        const title = book.querySelector('h2').textContent.toUpperCase();
        const author = book.querySelector('h3').textContent.toUpperCase();
        if (title.includes(searchbar) || author.includes(searchbar)) {
            book.style.display = "";
        } else {
            book.style.display = "none";
        }
    });
};
