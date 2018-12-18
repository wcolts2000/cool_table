import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { URL } from "../store/actions";
import BackBtnAttribute from "./BackBtnAttribute";
import BackButton from "./BackButton";

// ==============================
// =====  Styled Component  =====
// ==============================

const Form = styled.form`
  padding: 30px;
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

const PickTopic = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background: #0f0f0f;
  color: white;
  border-radius: 7px;
  margin-bottom: 20px;

  text-transform: uppercase;
`;

const TopicsBox = styled.div`
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Topic = styled.div`
  font-size: 10px;
  color: #0f0f0f;
  text-transform: uppercase;
  border-radius: 7px;
  background: aqua;
  display: inline-block;
  padding: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  margin-right: 5px;

  &:hover {
    opacity: 0.7;
  }
`;

const Label = styled.label`
  opacity: 0.4;
  padding-right: 330px;

  &:nth-of-type(2) {
    padding-right: 10px;
  }
`;

const Span = styled.span`
  font-size: 10px;
  color: white;
  border-radius: 7px;
  background: tomato;
  padding: 5px;
  cursor: pointer;
  margin-left: 35px;

  &:hover {
    opacity: 0.7;
  }
`;

// ==============================
// =====      Component     =====
// ==============================

export default class QuizForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      topic: "",
      question: "",
      options1: "",
      options2: "",
      options3: "",
      options4: "",
      answer: null,
      topics: [],
      topic_id: null
    };
  }

  componentDidMount = () => {
    axios
      .get(`${URL}quizzes/topics/`)
      .then(({ data }) => this.setState({ topics: data }))
      .catch(err => console.log(err));
  };

  resetForm = e => {
    e.preventDefault();
    this.setState({
      title: "",
      topic: "",
      question: "",
      options1: "",
      options2: "",
      options3: "",
      options4: "",
      answer: null,
      topics: [],
      topic_id: null
    });
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  addPost = e => {
    e.preventDefault();
    const userId = 1;
    axios
      .post(
        `${URL}posts`,
        `{this.state, id: ${userId}, created_at: ${Date.now()}}`
      )
      .then(({ data }) => console.log(data))
      .catch(err => console.log(err));
  };

  selectTopic = ({ id }) => {
    this.setState({
      topic_id: id
    });
  };

  render() {
    const Input = (name, placeholder, type = "text", min, max) => (
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required
        onChange={this.handleChange}
        min={min}
        max={max}
      />
    );
    return (
      <Form onSubmit={this.addPost}>
        <BackButton props={this.props} />
        <Label>(required)</Label>
        {Input("title", "Quiz title...")}
        <Label>(only if you dont select one from existing topics below)</Label>
        {Input("topic", "topic if not in topics below")}
        <Label>(required)</Label>
        {Input("question", "Question...")}
        <Label>(required)</Label>
        {Input("options1", "Answer option 1...")}
        <Label>(required)</Label>
        {Input("options2", "Answer option 2...")}
        <Label>(optional)</Label>
        {Input("options3", "Answer option 3...")}
        <Label>(optional)</Label>
        {Input("options4", "Answer option 4...")}
        <Label>(required)</Label>
        {Input("answer", "Correct Answer #", "number", 1, 4)}
        <PickTopic>
          <h3>
            pick your quiz topic{" "}
            {this.state.topic_id && (
              <Span onClick={() => this.setState({ topic_id: null })}>
                UNSELECT
              </Span>
            )}
          </h3>
          <TopicsBox>
            {this.state.topics
              ? this.state.topics.map(({ id, name }) => (
                  <Topic
                    id={id}
                    key={id}
                    onClick={() => this.selectTopic({ id })}
                    style={
                      this.state.topic_id === id
                        ? { background: "yellow" }
                        : null
                    }
                  >
                    {name}
                  </Topic>
                ))
              : null}
          </TopicsBox>
        </PickTopic>
        <button>Test&nbsp;Peeps&nbsp;knowledge</button>
        {"  "}
        <button onClick={this.resetForm}>Reset</button>
        <BackBtnAttribute />
      </Form>
    );
  }
}
