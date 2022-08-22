import React from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import "./homescreen-style.css";
const HomeScreen = () => {
  return (
    <div className="home-screen">
      <div className="homescreen-info">
        <div className="home-screen-top">
          <Row>
            <Col>
              <h1 className="mt5">Welcome to KaYDIYEE </h1>
              <h4>{process.env.REACT_APP_API_URL}</h4>

              <b>
                KaYDIYEE a multi-purpose free healthcare website template that
                you can use for building hospital, clinic, doctor, dentist, and
                surgeon pages, to name a few. You can go the generic or the
                niche way, whatever you do, DrCare guarantees a spectacular
                final product that will grow your medical business to new
                successes. Couple your professional servic
              </b>
              <br />
              <Button>Visit Us</Button>
            </Col>
            <Col xs={12} sm={12} md={6}>
              <img
                style={{ marginBottom: "40px" }}
                src="https://pbs.twimg.com/media/EhphECNXgAYhDUZ.jpg"
                alt=""
              />
            </Col>
          </Row>
        </div>
        <div className="home-screen-middle bg-blue   shadow-4  ">
          <div className="middle-info pa3 shadow-4 br4 ">
            <ListGroup>
              <Row>
                <Col xs={12} sm={12} lg={6}>
                  <ListGroup.Item className="shadow-5 br3 gray ma1">
                    <i className="fas fa-ambulance  gray f4 icone"></i>
                    <h3>Best Services</h3>
                    anged. It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages, and more
                    recently with d
                  </ListGroup.Item>
                </Col>
                <Col xs={12} sm={12} lg={5}>
                  <ListGroup.Item className="shadow-5 br3 gray ma1">
                    <h6 className="pa1 f4 bold center">NIght / Day Shift </h6>
                    anged. It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages, and more
                    recently with d
                  </ListGroup.Item>
                </Col>{" "}
                <Col xs={12} sm={12} lg={6}>
                  <ListGroup.Item className="shadow-5 br3 gray ma1">
                    <i
                      className="fas fa-emergency center"
                      style={{ alignItems: "center" }}
                    />
                    <h5>Emergency Care</h5>
                    anged. It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages, and more
                    recently with d
                  </ListGroup.Item>
                </Col>
                <Col className="ma1" lg={5}>
                  <ListGroup.Item className="shadow-5 br3 gray ma1">
                    <h5>24 Hours </h5>
                    anged. It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages, and more
                    recently with d
                  </ListGroup.Item>
                </Col>
              </Row>
            </ListGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
