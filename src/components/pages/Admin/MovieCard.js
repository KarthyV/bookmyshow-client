import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { API } from "../../../api";
import { MyContext } from "../../../context";

const MovieCard = ({ id, img, name, language }) => {
  const { movies, setMovies } = useContext(MyContext);
  const navigate = useNavigate();
  const deleteMovie = () => {
    fetch(`${API}/movies/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        navigate("/admin");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Card style={{ width: "6.7rem" }}>
        <Card.Img variant="top" className="adminImage" src={img} />
        <Card.Body>
          <Button
            onClick={() => navigate(`/admin/edit-movie/${id}`)}
            variant="danger"
          >
            Edit
          </Button>
          <Button onClick={deleteMovie} variant="danger">
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
