import React from 'react';
import ReactDOM from 'react-dom';
import Answer from '../../client/src/components/Q&A/questionComponents/Answer.jsx';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import regeneratorRuntime from "regenerator-runtime";

var localStorageMock = (function() {
  var store = {};
  return {
    getItem: function(key) {
      return store[key];
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    },
    removeItem: function(key) {
      delete store[key];
    }
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

let testAnswer = {
  "id": 4841056,
  "body": "Voluptatem iste corporis.",
  "date": "2021-02-15T00:00:00.000Z",
  "answerer_name": "Mariam99",
  "helpfulness": 10,
  "photos": [
      "https://images.unsplash.com/photo-1516684810863-e49c82f1f092?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=965&q=80"
  ]
};

describe('<Answer />', () => {

  let component;

  beforeEach(() => {
    component = render(<Answer answer={testAnswer}/>);
  });

  it('renders Answer component', () => {
    const answer = component.getByTestId('answer');
    expect(answer).toBeInTheDocument();
  });

  it('allows user to mark answer as helpful, helpfulness int should increase by 1', async () => {
    const button = screen.getByRole('button', { name: /helpful/i});
    fireEvent.click(button);

    await waitFor(() => expect(component.findByText(`Yes (${testAnswer.helpfulness})`)).toBeDefined());
  });

  it('allows user to mark answer as reported', async () => {
    const button = screen.getByRole('button', { name: /reported/i});
    fireEvent.click(button);


    await waitFor(() => expect(component.findByText('Report')).toBeDefined());
  });

 });