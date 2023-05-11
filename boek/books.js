let output = document.querySelector(".output");

let book = {
title : "The hobbit",
author : "J.R.R. Tolkien",
publisher : "Houghton Mifflin Harcourt",
year : "1937",
verkocht : "100 million",
prijs : "11,95",
}

output.innerHTML = ` 
<p>The name of the book is ${book.title}</p>
<p>The name of the book is ${book.author}</p>
<p>The name of the book is ${book.publisher}</p>
<p>The name of the book is ${book.year}</p>
<p>The name of the book is ${book.verkocht}</p>
<p>The name of the book is ${book.prijs}</p>





`
