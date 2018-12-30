import React, { Component } from "react";
import axios from "axios";

export default class ZenQuote extends Component {
  state = {
    quote: ""
  };

  componentDidMount = () => {
    axios
      .get("https://api.github.com/zen")
      .then(({ data }) => this.setState({ quote: data }))
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.quote)
      return (
        <div style={{ padding: 20 }}>
          <h4
            style={{
              background: "#deb887",
              width: "100%",
              display: "inline",
              fontSize: 12,
              borderRadius: 3,
              padding: 10,
              lineHeight: 1.5,
              boxShadow: "-1px 2px rgba(0,0,0,.2)"
            }}
          >
            {this.state.quote}
          </h4>
          <blockquote style={{ fontSize: 10 }}>
            <em>-Random Zen Quote | https://api.github.com/zen</em>
          </blockquote>
        </div>
      );
    return null;
  }
}
