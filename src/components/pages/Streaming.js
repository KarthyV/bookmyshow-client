import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "../MovieCard";
import { MyContext } from "../../context";

const Streaming = () => {
  const { movies } = useContext(MyContext);

  return (
    <Container>
      <div className="title streamBox">Currently Streaming :</div>
      <Row>
        {movies.map((movie) => {
          return (
            <Col key={movie._id}>
              <MovieCard
                name={movie.name}
                img={movie.image}
                language={movie.language}
                id={movie._id}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Streaming;
