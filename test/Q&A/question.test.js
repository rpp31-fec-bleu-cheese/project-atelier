import React from 'react';
import ReactDOM from 'react-dom';
import QandA from '../../client/src/components/Q&A/Q&A.jsx';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'


it('renders QandA component', () => {
  const {getByTestId} = render(<QandA />)
  expect(getByTestId('question-answers')).toBeInTheDocument();
});

