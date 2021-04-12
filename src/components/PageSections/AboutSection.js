import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Sections.css";

function AboutSection() {
  return (
    <>
      <Container className="section-container">
        <Row>
          <Col className="about-container">
            <p className="about-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              fugiat labore assumenda minima odio debitis totam reiciendis ex
              quia itaque explicabo illo delectus voluptate, accusamus incidunt!
              Aspernatur quis dicta voluptatum.
            </p>
          </Col>
          <Col className="profile-container">
            <img
              className="profile-picture"
              src="/images/me.jpg"
              alt="Profile Picture"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutSection;
