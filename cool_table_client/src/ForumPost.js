import React, { Component } from "react";
import styled from "styled-components";
import { addSinglePost } from "./store/actions";
import { connect } from "react-redux";
import BackBtnAttribute from "./components/BackBtnAttribute";
import BackButton from "./components/BackButton";

// ==============================
// =====  Styled Component  =====
// ==============================

const Form = styled.form`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const Textarea = styled.textarea`
  height: 30vh;
  resize: none;
  background: #deb887;
  border: none;
  outline: none;
  border-bottom: 2px solid aqua;
  font-size: 16px;
  padding: 15px 20px;
  text-align: left;
  display: block;
  border-radius: 10px;
  margin: 0 auto;
  color: #0f0f0f;
  margin-bottom: 20px;
  width: 80%;
  max-width: 400px;

  &::placeholder {
    color: white;
    text-shadow: -1px 2px rgba(0, 0, 0, 0.3);
  }

  &:focus {
    border: none;
    outline: none;
    border-bottom: 2px solid green;
  }
`;

const FormBox = styled.div`
  width: 440px;
  padding: 20px;
  margin: 0 auto;
`;

// ==============================
// =====      Component     =====
// ==============================

class ForumPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    let post = this.state;
    let { user, token } = this.props;
    return (
      <Form onSubmit={() => this.props.addSinglePost({ user, token, post })}>
        <BackButton props={this.props} />
        <FormBox>
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleInputChange}
            placeholder="Title..."
            name="title"
          />
          <Textarea
            value={this.state.body}
            onChange={this.handleInputChange}
            placeholder="Your thoughts..."
            name="body"
          />
          <button>Drop&nbsp;some&nbsp;knowledge</button>
        </FormBox>
        <BackBtnAttribute />
      </Form>
    );
  }
}

const mapStateToProps = ({ user, token }) => ({
  user,
  token
});

export default connect(
  mapStateToProps,
  { addSinglePost }
)(ForumPost);
