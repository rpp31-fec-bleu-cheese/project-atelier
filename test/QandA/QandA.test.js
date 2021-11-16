import React from 'react';
import ReactDOM from 'react-dom';
import QandA from '../../client/src/components/Q&A/Q&A.jsx';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('<QandA />', () => {
  it ('renders QandA component without crashing', () => {
    const { getByTestId } = render(<QandA />);
    expect(getByTestId('question-answers')).toBeInTheDocument();
  });
});