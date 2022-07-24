import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "./Navbar";
import MovieCard from "./MovieCard";
import { Container } from "react-bootstrap";

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [theaterName, setTheaterName] = useState("");
  const location = useLocation();
  const id = location.state.id;

  useEffect(() => {
    fetch(`https://movie-booking-backend-rp.herokuapp.com/admin/theater/${id}`)
      .then((response) => response.json())
      .then((data) => {
        let theaterName = data[0].theaterName;
        let films = data[0].films;
        setTheaterName(theaterName);
        setFilms(films);
      });
  }, []);

  return (
    <>
      <Navigation />
      <Container>
        <div className='movieList'>
          {films &&
            films.map((film) => {
              return (
                <MovieCard
                  key={film.movieName}
                  film={film}
                  theaterName={theaterName}
                />
              );
            })}
        </div>
      </Container>
    </>
  );
};

export default Movies;
