import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Button, Dropdown, Row, Col } from "react-bootstrap";
import { API } from "../../api";
import swal from "sweetalert";

const ViewBooking = () => {
  const { id } = useParams();
  const [theatre, setTheatre] = useState(null);
  const [seatCount, setSeatCount] = useState(0);
  const [movie, setMovie] = useState(null);
  const [showTime, setShowTime] = useState(null);

  const seats = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetch(`${API}/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  const handleSubmit = () => {
    if (!theatre || seatCount === 0) {
      swal("No Ticket Booked", `Please specify ticket Qty & Theatre`, "error");
    } else {
      swal(
        "Ticket Booked Successfully",
        `Booked Seats : ${seatCount} 
      Theatre : ${theatre}
      Timing : ${showTime}`,
        "success"
      );
    }
  };

  console.log(movie);

  if (!movie) return <div>Loading...</div>;
  else {
    return (
      <div>
        <Card className="booking">
          <Card.Img variant="left" src={movie.image} />
          <Card.Body>
            <Card.Title>{movie.name}</Card.Title>
            <Card.Text>Screen : {movie.screen}</Card.Text>
            <Card.Text>Language : {movie.language}</Card.Text>
            <Card.Text> Certificate : {movie.certificate}</Card.Text>
            <Card.Text>Rating : {movie.rating}</Card.Text>
          </Card.Body>
        </Card>

        <Container fluid="md">
          <Row>
            <Col className="booknow">
              Select Theatre :
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {!theatre ? "Select a Theatre" : theatre}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {movie.theatre.map((t, i) => (
                    <Dropdown.Item key={i} onClick={() => setTheatre(t)}>
                      {t}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col className="booknow">
              Select Timing :
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  {!showTime ? "Select a show time" : showTime}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {movie.timings.map((t, i) => (
                    <Dropdown.Item key={i} onClick={() => setShowTime(t)}>
                      {t}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col className="booknow">
              {" "}
              Select Seats :
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  {seatCount}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {seats.map((n, i) => (
                    <Dropdown.Item key={i} onClick={() => setSeatCount(n)}>
                      {n}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row>
            <Col className="booknow">
              {" "}
              <Button onClick={handleSubmit} variant="danger">
                Book Now
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
};

export default ViewBooking;
