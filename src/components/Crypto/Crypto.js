import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { PieChart } from "react-minimal-pie-chart";

function About() {
  return (
    <Container>
      <Particle />
      <Container fluid className="about-section">
        <h1 className="project-heading">
          Current <strong className="purple">Allocation </strong>
        </h1>
        <br /> <br />

        <Row style={{height: '50vh'}}>
          <PieChart
            data={[
              { title: "One", value: 10, color: "#E38627" },
              { title: "Two", value: 15, color: "#C13C37" },
              { title: "Three", value: 20, color: "#6A2135" },
            ]}
            animate
            animationDuration={500}
            animationEasing="ease-out"
            radius={50}
            labelPosition={50}
          />
        </Row>

      </Container>
      <br /> <br /> <br /> <br />
    </Container>
  );
}

export default About;
