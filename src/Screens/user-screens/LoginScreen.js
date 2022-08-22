import React, { useState, useEffect } from "react";
import { Button, Card, Col, Form, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../actions/userActions";
import FormContainer from "../../components/FormContainer";

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const redirect = useNavigate();

  useEffect(() => {
    if (userInfo) {
      redirect("/");
    }
  }, [redirect, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(login(email, password));
    setPassword("");
  };

  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <FormContainer>
        <Row>
          <Col>
            <h3 className="blue pa2 ">Sign in Dashboard</h3>
          </Col>
        </Row>
        <Card>
          <ListGroup className="pa2">
            <ListGroup.Item>
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="email">
                  <Form.Label>Email </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId="password" className="py-1">
                  <Form.Label> password </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="your password  "
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Button type="submit" className="mt2">
                  Sigin{" "}
                </Button>
                <Link className="ml3 mt2" to="/register">
                  New User
                </Link>
              </Form>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </FormContainer>
    </div>
  );
};

export default LoginScreen;
