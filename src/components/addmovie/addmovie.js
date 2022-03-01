import React ,{useState} from "react";
import { Form } from "react-bootstrap";


const Addmovie = ({ movieListHandler }) => {
  const [name, SetName] = useState("");
  const [description, SetDescription] = useState("");
  const [rating, SetRating] = useState("");
  const [posterUrl, SetPosterUrl] = useState("");
  const AddHandler = () => {
    const addedMovie = {
      name: name,
      description: description,
      rating: rating,
      posterUrl: posterUrl,
    };
    movieListHandler(addedMovie);
  }

  return (
    <div className="addingform">
      <h2>Add A New Movie </h2>
      <Form.Control
        className="field"
        type="text"
        placeholder="name"
        onChange={(e) => SetName(e.target.value)}
      />
      <Form.Control
        className="field"
        type="text"
        placeholder="description"
        onChange={(e) => SetDescription(e.target.value)}
      />
      <Form.Control
        className="field"
        type="text"
        placeholder="rating"
        onChange={(e) => SetRating(e.target.value)}
      />
      <Form.Control
        className="field"
        type="text"
        placeholder="posterUrl"
        onChange={(e) => SetPosterUrl(e.target.value)}
      />
    
      <button className="buttonadd" onClick={AddHandler}>
        ADD
      </button>
    </div>
  );
};

export default Addmovie;
