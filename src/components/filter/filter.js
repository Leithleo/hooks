import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

const Filter = ({ handleChange }) => {
  return (
    <div className="searchform">
      <InputGroup size="mb-3" className="searchthing">
        <FormControl
          placeholder="Search With Title or Rating"
          onChange={handleChange}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
    </div>
  );
};

export default Filter;
