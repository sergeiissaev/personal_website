import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { PieChart } from "react-minimal-pie-chart";
import getBTC from "../Services/crypto_prices";
import axios from "axios";

const btc_amount = 0.195;
const eth_amount = 24.021;
const xrp_amount = 9195;
const ada_amount = 8327;

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      btc_price: 0,
      eth_price: 0,
      xrp_price: 0,
      ada_price: 0,
      total_value: 0,
    };
    this.getBTC = this.getBTC.bind(this);
    this.getETH = this.getETH.bind(this);
    this.getXRP = this.getXRP.bind(this);
    this.getADA = this.getADA.bind(this);
    this.labelGenerator = this.labelGenerator.bind(this);
  }

  componentDidMount() {
    this.getBTC();
    this.getETH();
    this.getXRP();
    this.getADA();
    this.chartData = [
      {
        title: "Bitcoin",
        value: 0,
        color: "#EEC13E",
      },
      {
        title: "Ethereum",
        value: 0,
        color: "#4096ED",
      },
      {
        title: "XRP",
        value: 0,
        color: "#000066",
      },
      {
        title: "ADA",
        value: 0,
        color: "#0000ff",
      },
    ];
  }

  getBTC() {
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=cad"
      )
      .then((response) => {
        this.setState({
          total_value:
            this.state.total_value + btc_amount * response.data.bitcoin.cad,
          btc_price: response.data.bitcoin.cad,
        });
        this.chartData[0].value = btc_amount * this.state.btc_price;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getETH() {
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=cad"
      )
      .then((response) => {
        this.setState({
          total_value:
            this.state.total_value + eth_amount * response.data.ethereum.cad,
          eth_price: response.data.ethereum.cad,
        });
        this.chartData[1].value = eth_amount * this.state.eth_price;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getXRP() {
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=ripple&vs_currencies=cad"
      )
      .then((response) => {
        this.setState({
          total_value:
            this.state.total_value + xrp_amount * response.data.ripple.cad,
          xrp_price: response.data.ripple.cad,
        });
        this.chartData[2].value = xrp_amount * this.state.xrp_price;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getADA() {
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=cad"
      )
      .then((response) => {
        console.log(response);
        this.setState({
          total_value:
            this.state.total_value + ada_amount * response.data.cardano.cad,
          ada_price: response.data.cardano.cad,
        });
        this.chartData[3].value = ada_amount * this.state.ada_price;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  labelGenerator({ dataEntry }) {
    console.log(this.state);
    return (
      dataEntry.title +
      " " +
      Math.round((dataEntry.value * 100) / this.state.total_value) +
      "% "
    );
  }

  render() {
    return (
      <Container>
        <Particle />
        <Container fluid className="about-section">
          <h1 className="project-heading">
            Current <strong className="purple">Allocation </strong>
          </h1>
          <br /> <br />
          <Row style={{ height: "50vh" }}>
            {this.state.btc_price > 0 &&
              this.state.eth_price > 0 &&
              this.state.xrp_price > 0 &&
              this.state.ada_price > 0 && (
                <PieChart
                  data={this.chartData}
                  animate
                  animationDuration={500}
                  animationEasing="ease-out"
                  radius={50}
                  labelStyle={{
                    fontSize: "3px",
                    fontFamily: "sans-serif",
                    fill: "white",
                  }}
                  label={this.labelGenerator}
                  labelPosition={70}
                />
              )}
          </Row>
        </Container>
        <br /> <br /> <br /> <br />
      </Container>
    );
  }
}

export default About;
