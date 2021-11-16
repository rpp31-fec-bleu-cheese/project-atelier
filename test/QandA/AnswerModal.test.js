import React from 'react';
import ReactDOM from 'react-dom';
import AnswerModal from '../../client/src/components/Q&A/modalComponents/AnswerModal.jsx';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('<AnswerModal />', () => {

  let component;

  beforeEach(() => {
    component = render(<AnswerModal showModal={true}/>);
  });

  it('renders AnswerModal component without crashing', () => {
    const answerModal = component.getByTestId('a-modal');
    expect(answerModal).toBeInTheDocument();
  });

  it('renders proper form fields', () => {
    const nameField = screen.getByLabelText('What is your nickname *');
    const emailField = screen.getByLabelText('Your email *');
    const answerField = screen.getByLabelText('Your Answer *');

    expect(nameField).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    expect(answerField).toBeInTheDocument();
  });

  it('renders "Submit Answer" form button', () => {
    const submitBtn = screen.getByRole('button', { name: /submit-answer/i});
    expect(submitBtn).toBeInTheDocument();
  });

})