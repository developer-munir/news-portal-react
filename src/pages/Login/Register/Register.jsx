import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const { createUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [terms, setTerms] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    createUserProfile(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  const handleTermsAndCondition = (e) => {
    const cheak = e.target.checked;
    setTerms(cheak);
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name </Form.Label>
          <Form.Control
            type="text"
            required
            name="name"
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo</Form.Label>
          <Form.Control
            type="text"
            required
            name="photo"
            placeholder="Enter photourl"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            required
            name="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Check
          type="checkbox"
          onClick={handleTermsAndCondition}
          label={
            <>
              Accept <Link to="/terms">Terms And Condition</Link>
            </>
          }
        />
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Text className="text-muted">
            <p className="text-danger">{error}</p>
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!terms}>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
