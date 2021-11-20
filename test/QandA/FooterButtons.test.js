import React from 'react';
import ReactDOM from 'react-dom';
import FooterButtons from '../../client/src/components/Q&A/FooterButtons.jsx';
import QuestionModal from '../../client/src/components/Q&A/modalComponents/QuestionModal.jsx';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';


describe('<FooterButtons />', () => {

  let component;

  beforeEach(() => {
    component = render(<FooterButtons questionsLength={3}/>);
  });


  it('renders FooterButtons component without crashing', () => {
    const footerButtons = component.getByTestId('footer-btns');
    expect(footerButtons).toBeInTheDocument();
  });

  it('renders "ADD A QUESTION +" button correctly', () => {
    const button = screen.getByRole('button', { name: /add-question-btn/i});
    expect(button).toHaveTextContent('ADD A QUESTION +');
  });

  it('renders "MORE ANSWERED QUESTIONS" button correctly if there are 2+ questions', () => {
    const button = screen.getByRole('button', { name: /more-questions/i});
    expect(button).toHaveTextContent('MORE ANSWERED QUESTIONS');
  });

  it('should open question modal on "ADD A QUESTION" click', () => {
    const { getByTestId } = render(<QuestionModal />);
    const questionModal = screen.getAllByTestId('q-modal')[0]
    const button = screen.getByRole('button', { name: /add-question-btn/i});

    fireEvent.click(button);
    expect(questionModal).toBeInTheDocument();
  });

});
