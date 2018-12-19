import React, { Component } from "react";
import eye from "../img/eye.png";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  padding: 0;
  max-width: 500px;
  margin: 0 auto;
`;

const Img = styled.img`
  position: absolute;
  top: 10px;
  background: #0f0f0f;
  padding: 3px;
  border-radius: 50%;
  cursor: pointer;
  right: 45px;

  &:hover {
    opacity: 0.7;
  }
`;

class PasswordInput extends Component {
  state = {
    type: "password"
  };

  render() {
    return (
      <Div>
        <input
          type={this.state.type}
          placeholder={this.props.placeholder}
          autoComplete="off"
          name={this.props.name}
          value={this.props.inputValue}
          onChange={this.props.change}
        />
        <Img
          src={eye}
          alt="eye icon"
          onClick={() =>
            this.setState({
              type: this.state.type === "password" ? "text" : "password"
            })
          }
        />
      </Div>
    );
  }
}

export default PasswordInput;
