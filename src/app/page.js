"use client";

import { useState } from "react";
import AddMovieForm from './components/AddMovieForm';
import Movies from './components/Movies';
import Movie from './components/Movie';
import SortButton from "./components/OrderButtons";
import next from "next";

export default function Home() {
  const [movies, setMovies] = useState([]); // state to hold movies
  const [nextId, setNextId] = useState(1); // state to hold next id, starts at 1

  const addMovie = (newMovie) => {
    const movieWithId = {
      ...newMovie,
      id: nextId
    };

    setMovies((movies) => [...movies, movieWithId]);
    setNextId(nextId + 1);
  };

  const deleteMovie = (id) => {
    setMovies((movies) => movies.filter((movie) => movie.id !== id));
  };

  const sortAlpha = () => {
    const sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title));
    setMovies(sortedMovies);
  };

  const sortRating = () => {
    const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);
    setMovies(sortedMovies);
  };

  return (
    <div className="container">
      <h1>Min filmlista</h1>
      <AddMovieForm addMovie={addMovie} />
      <div>
      </div>
      <Movies>
        {movies.map(movie => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            rating={movie.rating}
            onDelete={deleteMovie}
          />
        ))}
      </Movies>
      <SortButton
        onSortAlpha={sortAlpha}
        onSortRating={sortRating}
      />
    </div>
  );
};
