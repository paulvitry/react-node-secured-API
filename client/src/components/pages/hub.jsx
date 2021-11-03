import React, { Component } from "react";
import Container from 'react-bootstrap/Container'


class Hub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptos: ["first item", "second item", "third item"]
    };
  }

  render() {
    const { cryptos } = this.state;
    return (
      <Container fluid>
        <div class="grid">
          {cryptos.Map((crypto) => (
          <div class="item">{crypto}</div>
          ))}
        </div>
      </Container>
    )
  }
}

export default Hub