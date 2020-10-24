import React, { Component } from 'react';
import styled from 'styled-components';

const Coluna = styled.div`
  border: 1px solid black;
  border-collapse: collapse;
  border-radius: 10px;

  padding: 10px;
`;

export default class Calculation extends Component {
  calculation = () => {
    const { grades } = this.props;

    let total = grades.reduce((acc, curr) => {
      return acc + curr.valor;
    }, 0);

    return total;
  };

  average = () => {
    let calc = this.calculation();
    const { grades } = this.props;

    const avg = calc / grades.length;

    return avg;
  };

  aprovMod = () => {
    const { grades } = this.props;

    let grade = grades.findIndex((item) => {
      return item.valor < 60;
    });

    return grade;
  };

  render() {
    return (
      <div className="col s12 m6">
        <Coluna className="container-fluid">
          <h5 className="center">Calculo</h5>
          <span>Nota Total: {this.calculation()}</span>
          <br />
          <span>Percentual Total: {this.average()} % </span>
          <br />
          <span>
            Aprovação pela média do módulo (60%):{' '}
            {this.aprovMod() !== -1 ? (
              <span className="red-text">Não</span>
            ) : (
              <span className="teal-text">Sim</span>
            )}{' '}
          </span>{' '}
          <br />
          <span>
            Aprovação pelo percentual total (70%):{' '}
            {this.average() < 70 ? (
              <span className="red-text">Não</span>
            ) : (
              <span className="teal-text">Sim</span>
            )}{' '}
          </span>{' '}
          <br />
        </Coluna>
      </div>
    );
  }
}
