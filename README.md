# Book Finder App

A simple and responsive web application that allows users to search for books by title.  
Designed for the user persona **Alex**, a college student who wants to quickly explore books online.



## Features

✔ Search for books by title  
✔ Displays book cover, title, author, and published year  
✔ Uses Open Library Search API (no authentication needed)  
✔ Fully responsive for mobile and desktop  
✔ Fast and clean UI built with React  



## Technologies Used

- React (Functional Components + Hooks)
- CSS for styling
- Open Library API for book data

API Used:  
`https://openlibrary.org/search.json?title={bookTitle}`

Book Cover Image Format:  
`https://covers.openlibrary.org/b/id/{coverId}-M.jpg`



## Folder Structure
src

├─ App.js

├─ App.css

├─ index.js

└─ index.css

## How to Run Locally

```bash
git clone https://github.com/ChandiniGogulamanda/book-finder.git
cd book-finder
npm install
npm start
