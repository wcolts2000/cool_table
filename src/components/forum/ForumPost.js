import React, { Component } from "react";
import styled from "styled-components";
import { addSinglePost, editPost } from "../../store/actions";
import { connect } from "react-redux";
import BackBtnAttribute from "../specializedComponents/backButton/BackBtnAttribute";
import BackButton from "../specializedComponents/backButton/BackButton";

// ==============================
// =====  Styled Component  =====
// ==============================

const Form = styled.form`
  height: calc(100vh - 72px);
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
    color: #0f0f0f;
    opacity: 0.7;
  }

  &:focus {
    border: none;
    outline: none;
    border-bottom: 2px solid green;
  }
`;

const FormBox = styled.div`
  width: 400px;
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
      body: "",
      editing: false
    };
  }

  componentDidMount = () => {
    if (this.props.singlePost.length) {
      let { title, body } = this.props.singlePost[0];

      return this.setState({
        title: title,
        body: body,
        editing: true
      });
    }
    return null;
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  addPost = e => {
    e.preventDefault();
    let { token, user } = this.props;
    let post = this.state;
    if (this.state.editing) {
      return (
        this.props.editPost(
          this.props.singlePost[0].id,
          { title: this.state.title, body: this.state.body },
          this.props.token,
          user
        ),
        this.setState({
          title: "",
          body: "",
          editing: false
        }),
        this.props.history.push("/forum")
      );
    }
    if (this.state.title.length && this.state.body.length) {
      return (
        this.props.addSinglePost(post, token, user),
        this.setState({
          title: "",
          body: "",
          editing: false
        }),
        this.props.history.push("/forum")
      );
    }
    return null;
  };

  render() {
    return (
      <Form onSubmit={this.addPost}>
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

const mapStateToProps = ({
  userReducer: { token, user },
  postsReducer: { singlePost }
}) => ({
  token,
  user,
  singlePost
});

export default connect(
  mapStateToProps,
  { addSinglePost, editPost }
)(ForumPost);
