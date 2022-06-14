import React, { useState, useContext } from "react";
import { Container } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { API } from "../../../api";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../../context";

const AddMovie = () => {
  const { setMovies } = useContext(MyContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [screen, setScreen] = useState("");
  const [language, setLanguage] = useState("");
  const [certificate, setCertificate] = useState("");
  const [rating, setRating] = useState("");
  const [theatre, setTheatre] = useState("");
  const [timing, setTiming] = useState("");

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
    fetch(`${API}/movies`, {
      method: "POST",
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
      <h3 className="title">AddMovie</h3>
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
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AddMovie;
