import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Sections.css";

function AboutSection() {
  return (
    <>
      <Container className="section-container">
        <Row>
          <Col col={4} className="about-container">
            <h3>Hey there,</h3>
            <br />
            <p className="about-content">
              My name is Aaron and I'm a software engineer.
              <br />
              <br />
              I'm a recent software engineering graduate from General Assembly.
              I decided to pursue a career in software because first and
              foremost I've always had a passion for anything technology and
              software related.
              <br />
              <br />
              I also want to make a meaningful impact on the world and I figured
              the best way to do that would be to build new and exciting
              technologies to help people in need.
              <br />
              <br />
              Prior to the career pivot, I had studied Event and Media
              Production at Seneca College and worked in the industry for over 5
              years.
              <br />
              <br />
              <div className="sign-off">- Aaron Lei</div>
            </p>
          </Col>
          <Col sm={8} className="profile-container">
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
