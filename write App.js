import React, { useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  const moviesData = [
    {
      id: 1,
      title: "Inception",
      year: 2010,
      rating: 8.8,
      genre: "Sci-Fi",
      description: "A mind-bending thriller."
    },
    {
      id: 2,
      title: "Titanic",
      year: 1997,
      rating: 7.9,
      genre: "Romance",
      description: "A romantic tragedy movie."
    },
    {
      id: 3,
      title: "Avengers",
      year: 2019,
      rating: 8.5,
      genre: "Action",
      description: "Marvel superhero movie."
    },
    {
      id: 4,
      title: "Interstellar",
      year: 2014,
      rating: 8.7,
      genre: "Sci-Fi",
      description: "Space exploration movie."
    }
  ];

  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");

  const filteredMovies = moviesData.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesGenre =
      genre === "All" || movie.genre === genre;

    return matchesSearch && matchesGenre;
  });

  return (
    <div className="app">
      <h1>Movie List Filter & Search</h1>

      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="buttons">
        <button onClick={() => setGenre("All")}>All</button>
        <button onClick={() => setGenre("Action")}>Action</button>
        <button onClick={() => setGenre("Sci-Fi")}>Sci-Fi</button>
        <button onClick={() => setGenre("Romance")}>Romance</button>
      </div>

      <div className="movie-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <h2>No movies found</h2>
        )}
      </div>
    </div>
  );
}

export default App;
