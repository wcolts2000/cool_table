import React, { Component } from "react";
import styled from "styled-components";
import { fetchQuizzes } from "../../store/actions";
import { connect } from "react-redux";
import QuizCard from "./QuizzesCard";
import Select from "../specializedComponents/FormSelect/Select";

// ==============================
// =====      Component     =====
// ==============================

class QuizHome extends Component {
  state = {
    filteredQuizzes: [],
    formControls: {
      filterOptions: {
        value: '',
        options: [
          { value: 'A', displayValue: 'Show All Quizzes'},
          { value: 'B', displayValue: 'Show Only Quizzes With Questions'},
          { value: 'C', displayValue: 'Show Only Quizzes With No Questions'}
        ]
      }
    },
    formIsValid: false
  }

  componentDidMount = () => {
    this.props.fetchQuizzes();
  };

  filterQuizzes = () => {
    console.log("QQQQQUIZES: ", this.props.quizzes)
    const filteredQuizzes = []
    switch (this.state.formControls.filterOptions.value) {
      case "": 
        filteredQuizzes.push(this.props.quizzes);
        break;
      case "A": 
        filteredQuizzes.push(this.props.quizzes);
        break;
      case "B": 
        filteredQuizzes.push(
          this.props.quizzes.filter(quiz => {
              return quiz.question_count > 0
            })
          )
          break;
      case "C": 
        filteredQuizzes.push(this.props.quizzes.filter(quiz => {
            return quiz.question_count === 0
          }))
        break;
      default: 
          break
  }

    this.setState({filteredQuizzes})
  }

  changeHandler = event => {
    console.log("EVENT HERE: ", event.target.value)
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;

    const updatedControls = {
      ...this.state.formControls
    };
    const updatedFormElement = {
      ...updatedControls[name]
    };
    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    updatedControls[name] = updatedFormElement;

    this.setState({
      formControls: updatedControls,
      formIsValid: true
    });

  }
  
  formSubmitHandler = (e) => {
    e.preventDefault()
    this.filterQuizzes()
  console.log(this.state.formControls);
  console.dir(this.state.formControls);
}


  render() {
    let { quizzes, isLoggedIn, history } = this.props;
    return (
      quizzes && (
        <>
          <h1> __QUIZZES__</h1>
          <Form className="selectWrapper">
            <Select 
              onChange={this.changeHandler}
              label={this.state.formControls.filterOptions.label}
              value={this.state.formControls.filterOptions.value}
              name="filterOptions"
              options={this.state.formControls.filterOptions.options}
                />
              <button
                onClick={this.formSubmitHandler} 
                disabled={this.state.formControls.filterOptions.value === ""}
              > 
              Filter
              </button>
          </Form>
          {isLoggedIn ? (
            <button
              onClick={() => this.props.history.push("/quiz/form")}
              style={{ display: "block", margin: "0 auto" }}
            >
              Add A Quiz
            </button>
          ) : null}
          <QuizCardWrapper>
            <ul>
              {this.state.filteredQuizzes.length ? this.state.filteredQuizzes[0].map((quiz, i) => {
                console.log("QUIZ MAP FILTER: ", quiz)
                return <QuizCard key={i} quiz={quiz} history={history} />;
              }) : quizzes.map((quiz, i) => {
                console.log("QUIZ MAP: ", quiz)
                return <QuizCard key={i} quiz={quiz} history={history} />;
              })}
            </ul>
          </QuizCardWrapper>
        </>
      )
    );
  }
}

const mapStateToProps = ({
  quizzesReducer: { quizzes },
  userReducer: { isLoggedIn }
}) => ({
  quizzes,
  isLoggedIn
});

export default connect(
  mapStateToProps,
  { fetchQuizzes }
)(QuizHome);

// ==============================
// =====  Styled Component  =====
// ==============================

const Form = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 2rem;

  button {
    background: white;
    border: none;
    border-radius: 0;
    color: black;
    padding: .5rem 1rem;
    font-size: 1rem;
    margin: .5rem 0;
    box-shadow: none;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(169, 169, 169);
    border-image: initial;
    font-family: 'Arial';
    font-weight: normal;
    letter-spacing: initial;
    text-transform: capitalize;

    :hover {
      box-shadow: none;
      top: 0;
      opacity: 1;
    }
    :active {
      box-shadow: none;
      top: 0;
      opacity: 1;
      color: lightgreen
    }
  }
`

const QuizCardWrapper = styled.div`
  padding: 10px;
  width: 80%;
  max-width: 800px;
  margin: 30px auto;
  border-radius: 7px;
  box-shadow: -1px 2px 7px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
  display: inline-block;
  color: aqua;
  background: #0f0f0f;
  border: 2px solid aqua;
  text-align: left;
`;
