import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { PieChart } from "react-minimal-pie-chart";

const chartData = [
  { title: "Bitcoin", value: 5971.0, color: "#EEC13E" },
  { title: "Ethereum", value: 50468.08, color: "#4096ED" },
];

function About() {
  return (
    <Container>
      <Particle />
      <Container fluid className="about-section">
        <h1 className="project-heading">
          Current <strong className="purple">Allocation </strong>
        </h1>
        <br /> <br />
        <Row style={{ height: "50vh" }}>
          <PieChart
            data={chartData}
            animate
            animationDuration={500}
            animationEasing="ease-out"
            radius={50}
            labelStyle={{
              fontSize: "3px",
              fontFamily: "sans-serif",
              fill: "#121212",
            }}
            label={({ dataEntry }) => {
              return dataEntry.title + " " + Math.round(dataEntry.value) + "% ";
            }}
            labelPosition={70}
          />
        </Row>
      </Container>
      <br /> <br /> <br /> <br />
    </Container>
  );
}

export default About;
