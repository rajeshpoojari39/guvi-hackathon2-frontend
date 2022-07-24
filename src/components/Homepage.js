import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Navigation from "./Navbar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
  const [theaters, setTheaters] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    fetch("https://movie-booking-backend-rp.herokuapp.com/admin/theater")
      .then((respone) => respone.json())
      .then((data) => {
        setTheaters(data);
      });
  }, []);

  return (
    <>
      <Navigation />
      <Container>
        {theaters &&
          theaters.map((theater) => {
            return (
              <Card className='theaterCard' key={theater._id}>
                <Card.Body>
                  <Card.Title>{theater.theaterName}</Card.Title>
                  <Button
                    variant='primary'
                    onClick={() =>
                      navigate("/movies", { state: { id: theater._id } })
                    }
                  >
                    See Movie Screening
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
      </Container>
    </>
  );
};

export default Homepage;
