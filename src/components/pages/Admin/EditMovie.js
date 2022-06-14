import React, { useState, useContext } from "react";
import { Container } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { API } from "../../../api";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../../../context";

const EditMovie = () => {
  const { id } = useParams();
  const { movies, setMovies } = useContext(MyContext);
  const navigate = useNavigate();

  const movie = movies.find((movie) => movie._id === id);
  console.log(movie);

  const [name, setName] = useState(movie.name);
  const [image, setImage] = useState(movie.image);
  const [screen, setScreen] = useState(movie.screen);
  const [language, setLanguage] = useState(movie.language);
  const [certificate, setCertificate] = useState(movie.certificate);
  const [rating, setRating] = useState(movie.rating);
  const [theatre, setTheatre] = useState(movie.theatre);
  const [timing, setTiming] = useState(movie.timings);

  const toArrayType = (text) => {
    let input = text;
    if (text.includes(",")) {
      input = text.split(",");
      return input;
    } else return input;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const adminScreen = toArrayType(screen);
    const adminLanguage = toArrayType(language);
    const adminRating = toArrayType(rating);
    const adminTheatre = toArrayType(theatre);
    const adminTiming = toArrayType(timing);

    const data = {
      name,
      image,
      screen: adminScreen,
      language: adminLanguage,
      certificate,
      rating: adminRating,
      theatre: adminTheatre,
      timings: adminTiming,
    };

    // console.log(data);
    fetch(`${API}/movies/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        navigate("/admin");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container className="addMovie">
      <h3 className="title">Edit Movie</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Movie Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter movie name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Poster Link</Form.Label>
          <Form.Control
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="text"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Screen Availability</Form.Label>
          <Form.Control
            value={screen}
            onChange={(e) => setScreen(e.target.value)}
            type="text"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Languages</Form.Label>
          <Form.Control
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            type="text"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Certificate</Form.Label>
          <Form.Control
            value={certificate}
            onChange={(e) => setCertificate(e.target.value)}
            type="text"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            type="text"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Theatres</Form.Label>
          <Form.Control
            value={theatre}
            onChange={(e) => setTheatre(e.target.value)}
            type="text"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Show Timings</Form.Label>
          <Form.Control
            value={timing}
            onChange={(e) => setTiming(e.target.value)}
            type="text"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default EditMovie;
