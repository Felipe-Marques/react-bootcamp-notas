import React, { Component } from 'react';
import styled from 'styled-components';

const Coluna = styled.div`
  border: 1px solid black;
  border-collapse: collapse;
  border-radius: 10px;

  padding: 10px;
`;

export default class Grades extends Component {
  handleInput = (event) => {
    const { onInput } = this.props;
    const { id, value } = event.target;
    onInput(id, value);
  };

  render() {
    const { grades } = this.props;

    return (
      <div className="col s12 m6">
        <Coluna className="container-fluid">
          <h5 className="center">Notas</h5>

          <div className="row">
            <div className="col s12">
              <div className="row">
                {grades.map(({ id, description, valor }) => {
                  return (
                    <div key={id} className="input-field col s12">
                      <input
                        autoFocus={id === 1}
                        id={id}
                        type="number"
                        className="validate"
                        min="0"
                        max="100"
                        defaultValue={String(valor)}
                        onInput={this.handleInput}
                      />
                      <label htmlFor={id} className="active">
                        {description}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Coluna>
      </div>
    );
  }
}
