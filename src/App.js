import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  Thriler: [
    {
      name: "Money Heist",
      rating: "4.8/5"
    },
    {
      name: "The A List",
      rating: "3.2/5"
    },
    {
      name: "Dark",
      rating: "4.8/5"
    }
  ],

  Adventure: [
    {
      name: "Sweet Home",
      rating: "4.9/5"
    },
    {
      name: "Titans",
      rating: "4/5"
    },
    {
      name: "Shadow And Bone",
      rating: " 4.7/5"
    }
  ],
  Crime: [
    {
      name: "Braking Bad",
      rating: "4.4/5"
    },
    {
      name: "Peaky Blinders",
      rating: "4/5"
    },
    {
      name: "Squid Game",
      rating: "4.5/5"
    },
    {
      name: "Sacred Games",
      rating: "4.5/5"
    }
  ],
  Love: [
    { name: "Love Combat", rating: "3.5/5" },
    { name: "Love Alarm", rating: "4/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Love");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🎬 Webseries </h1>
      <p style={{ fontSize: "0.9rem" }}>
        {" "}
        Checkout my favorite Webseries . Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            key={genre}
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "lightgrey",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "0.2rem",
              fontWeight: "bold"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      {/* <hr /> */}
      <p>____________________________________________________</p>
      <div style={{ textAlign: "left", marginTop: "1.7rem" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid brown",
                width: "30%",
                // margin: "auto",
                marginBottom: "1rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
