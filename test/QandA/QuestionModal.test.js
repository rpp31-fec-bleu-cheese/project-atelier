import React from 'react';
import ReactDOM from 'react-dom';
import QuestionModal from '../../client/src/components/Q&A/modalComponents/QuestionModal.jsx';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('<QuestionModal />', () => {

  let component;

  beforeEach(() => {
    component = render(<QuestionModal showModal={true} closeModal={() => {}}/>);
  });

  it('renders AnswerModal component without crashing', () => {
    const questionModal = component.getByTestId('q-modal');
    expect(questionModal).toBeInTheDocument();
  });

  it('renders "Submit Question" form button', () => {
    const submitBtn = screen.getByRole('button', { name: /submit-question/i});
    expect(submitBtn).toBeInTheDocument();
  });


})