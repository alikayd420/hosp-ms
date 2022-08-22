import React, { useState, Fragment, useEffect } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link, useInRouterContext } from "react-router-dom";
import { register } from "../../actions/userActions";
import FormContainer from "../../components/FormContainer";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");

  const [idNo, setIdNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const Redirect = useNavigate();

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { success, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      Redirect("/");
    }
  }, [Redirect, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("passwords do not match");
    } else {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("email", email);
      formData.append("image", image);
      formData.append("address", address);

      formData.append("password", password);
      formData.append("confirmPassword", confirmPassword);
      dispatch(register(formData));
    }
  };

  return (
    <div className="mt4">
      <FormContainer>
        {message && <h3>{message}</h3>}
        <ListGroup>
          <ListGroup.Item>
            <Form onSubmit={submitHandler}>
              {" "}
              <Form.Group controlId="email">
                <Form.Label>username </Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="name" className="py-1">
                <Form.Label> Hospital name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="your Hospital Name "
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>{" "}
              <Form.Group controlId="address" className="py-1">
                <Form.Label> address </Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="your address "
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></Form.Control>
              </Form.Group>
              {/* <Form.Group controlId="ID" className="py-1">
                <Form.Label> ID NO </Form.Label>
                <Form.Control
                  type="text"
                  name="idNo"
                  placeholder="your ID number "
                  value={idNo}
                  onChange={(e) => setIdNo(e.target.value)}
                ></Form.Control>
              </Form.Group> */}
              <Form.Group controlId="password" className="py-1">
                <Form.Label> password </Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="your password  "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="confirmPassword" className="py-1">
                <Form.Label> Confirm Password </Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="confirm password "
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Button type="submit" className="pa2 mt2">
                Register
              </Button>
              <Link className="ml2" to="/signin">
                Already have an Account{" "}
              </Link>
            </Form>
          </ListGroup.Item>
        </ListGroup>
      </FormContainer>
    </div>
  );
};

export default RegisterScreen;
