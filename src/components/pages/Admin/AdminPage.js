import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../../../context";
import MovieCard from "./MovieCard";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const AdminPage = () => {
  const { movies, setMovies, admin } = useContext(MyContext);
  const navigate = useNavigate();
  const sweetConfirm = () => {
    swal("Not Authorized", "Please login with admin Credentials", "error").then(
      (confirmed) => {
        if (confirmed) navigate("/");
      }
    );
  };
  if (!admin) return <div className="isAdmin">{sweetConfirm()}</div>;
  else {
    return (
      <Container>
        <h3 className="title">Current Movies : </h3>
        <Button onClick={() => navigate("/admin/add-movie")} variant="success">
          Add New Movie
        </Button>
        <Row>
          {movies.map((movie) => {
            return (
              <Col key={movie._id}>
                <MovieCard
                  img={movie.image}
                  language={movie.language}
                  name={movie.name}
                  id={movie._id}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
};

export default AdminPage;
