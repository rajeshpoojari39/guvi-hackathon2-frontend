import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function MovieCard({ film, theaterName }) {
  let navigate = useNavigate();
  const { movieName, img, price, seats, bookedSeats } = film;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant='top' src={img} className='cardImage' />
      <Card.Body>
        <Card.Title>{movieName}</Card.Title>
        <Card.Text>{`Price - ${price} Rs`}</Card.Text>
        <Button
          variant='primary'
          onClick={() =>
            navigate("/bookTicket", {
              state: {
                theaterName: theaterName,
                movieName: movieName,
                price: price,
                seats: seats,
                bookedSeats: bookedSeats,
              },
            })
          }
        >
          Book ticket
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
