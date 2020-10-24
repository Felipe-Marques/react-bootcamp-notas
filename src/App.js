import React, { Component } from 'react';
import PageDefault from './components/pageDefault/PageDefault';
import styled from 'styled-components';
import Grades from './components/grades';
import Calculation from './components/calculation';

const All_GRADES = [
  {
    id: 1,
    description: 'Módulo 01 - Fundamentos (0-100)',
    valor: 0,
  },
  {
    id: 2,
    description: 'Módulo 02 - Angular (0-100)',
    valor: 0,
  },
  {
    id: 3,
    description: 'Módulo 03 - React (0-100)',
    valor: 0,
  },
  {
    id: 4,
    description: 'Módulo 04 - Vue (0-100)',
    valor: 0,
  },
  {
    id: 5,
    description: 'Módulo 05 - Desafio Final (0-100)',
    valor: 0,
  },
];

const Section = styled.section`
  position: relative;
  top: calc(15vh - 60px);
`;

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      grades: [...All_GRADES],
    };
  }

  handleValues = (id, newValue) => {
    const { grades } = this.state;
    const newGrades = [...grades];
    newGrades.find((grade) => grade.id === parseInt(id)).valor = parseInt(
      newValue,
      10
    );

    this.setState({
      grades: newGrades,
    });
  };

  render() {
    const { grades } = this.state;

    return (
      <PageDefault>
        <Section>
          <div className="row">
            <Grades onInput={this.handleValues} grades={grades} />
            <Calculation grades={grades} />
          </div>
        </Section>
      </PageDefault>
    );
  }
}
