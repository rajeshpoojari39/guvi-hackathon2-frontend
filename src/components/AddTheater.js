import React, { useState } from "react";
import Navigation from "./Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddTheater = () => {
  const [theaterName, setTheaterName] = useState({});

  const changeHandler = (e) => {
    let theaterName = e.target.value;
    setTheaterName({ theaterName });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (theaterName.theaterName.length > 0) {
      fetch("https://movie-booking-backend-rp.herokuapp.com/admin/theater", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(theaterName),
      })
        .then((response) => response.json())
        .then((data) => {
          alert("Theater added successfully");
        })
        .catch((error) => {
          alert("Error:", error);
        });
    }
    setTheaterName({});
  };

  return (
    <>
      <Navigation />
      <div className='addForm'>
        <Form onSubmit={submitHandler}>
          <Form.Group className='mb-3' controlId='formGroupEmail'>
            <Form.Label>Theater Name</Form.Label>
            <Form.Control
              type='text'
              onChange={changeHandler}
              placeholder='Enter Theater Name'
              value={theaterName.theaterName}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddTheater;
