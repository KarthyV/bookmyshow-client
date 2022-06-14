import React, { useContext } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context";

const MovieCard = ({ name, img, language, id }) => {
  const navigate = useNavigate();
  const { user } = useContext(MyContext);

  const handleClick = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate(`/book/${id}`);
    }
  };
  return (
    <div>
      <Card style={{ width: "19rem" }}>
        <Card.Img variant="top" className="movieImage" src={img} />
        <Card.Body>
          <Card.Title className="cardTitle">{name}</Card.Title>
          <Card.Text>Language : {language}</Card.Text>
          <Button onClick={handleClick} variant="danger">
            Book Now
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
