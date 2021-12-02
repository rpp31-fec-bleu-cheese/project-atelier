import React from 'react';
import ReactDOM from 'react-dom';
import QandA from '../../client/src/components/Q&A/Q&A.jsx';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('<QandA />', () => {

  let component;

  beforeEach(() => {
    component = render(<QandA />);
  })

  it ('renders QandA component without crashing', () => {
    console.log(component.debug());
    const qandA = component.getByTestId('question-answers');
    expect(qandA).toBeInTheDocument();
  });

  it ('renders a list of questions', () => {
    const list = component.getByTestId('question-li');
    expect(list).toBeInTheDocument();
  });

});