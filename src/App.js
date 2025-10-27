import React, { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchBooks = async () => {
    if (!query.trim()) return;

    setLoading(true);

    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?title=${query}`
      );
      const data = await res.json();
      setBooks(data.docs.slice(0, 20)); // Show only first 20 results
    } catch (error) {
      console.error("Error fetching books", error);
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Book Finder</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search book title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchBooks()}
        />
        <button onClick={searchBooks}>Search</button>
      </div>

      {loading && <p>Loading...</p>}

      <div className="books-grid">
        {!loading &&
          books.map((book, index) => {
            const coverId = book.cover_i;
            const imageUrl = coverId
              ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
              : null;

            return (
              <div className="book-card" key={index}>
                {imageUrl ? (
                  <img src={imageUrl} alt={book.title} />
                ) : (
                  <div className="no-cover">No Cover</div>
                )}
                <h3>{book.title}</h3>
                <p>{book.author_name?.[0] || "Unknown Author"}</p>
                <small>
                  {book.first_publish_year
                    ? `Published: ${book.first_publish_year}`
                    : ""}
                </small>
              </div>
            );
          })}
      </div>

      {!loading && books.length === 0 && query.length > 0 && (
        <p>No books found.</p>
      )}
    </div>
  );
}

export default App;
