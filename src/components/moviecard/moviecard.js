import { Rate } from "antd";
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const MovieCard = ({ movieTitle, description, rating , posterUrl
 }) => {
  const [steps, setSteps] = useState(2);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={posterUrl}/>
        <Card.Body>
          <Card.Title>{movieTitle}</Card.Title>
          <Card.Text>
            {description}
            <br />
            <Rate disabled defaultValue= {rating}/>
          </Card.Text>
          <Button variant="primary">See Movie</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
