import React from 'react';
import styled from "styled-components";

// ==============================
// =====      Component     =====
// ==============================

const Select = props => {

    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
    }

    return (
        <FormGroup className="form-group">
          <label htmlFor={props.name}>{props.label}</label>
          <select className={formControl} value={props.value} onChange={props.onChange} name={props.name}>
            {props.options.map((option, i )=> (
              <option value={option.value} key={i}>
                {option.displayValue}
              </option>
            ))}
          </select>
        </FormGroup>
    );
}

export default Select;

// ==============================
// =====  Styled Component  =====
// ==============================

const FormGroup = styled.div`
  label {
    display: flex;
    flex-direction: column;
  }
  select {
    padding: .5rem 1rem;
    font-size: 1rem;
    margin: .5rem;
    border-radius: 5px;
  }
`
