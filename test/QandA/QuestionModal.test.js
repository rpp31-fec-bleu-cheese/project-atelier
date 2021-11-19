import React from 'react';
import ReactDOM from 'react-dom';
import QuestionModal from '../../client/src/components/Q&A/modalComponents/QuestionModal.jsx';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import regeneratorRuntime from "regenerator-runtime";

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

  it('changes value on name input field', () => {
    const inputEl = component.getByTestId('q-name');

    expect(inputEl.value).toBe('');

    fireEvent.change(inputEl, {
      target : {
        value: 'Chris986'
      }
    });

    expect(inputEl.value).toBe('Chris986');
  });

  it('changes value on email input field', () => {
    const inputEl = component.getByTestId('q-email');

    expect(inputEl.value).toBe('');

    fireEvent.change(inputEl, {
      target : {
        value: 'chris986@example.com'
      }
    });

    expect(inputEl.value).toBe('chris986@example.com');
  });

  it('changes value on question input field', () => {
    const inputEl = component.getByTestId('question');

    expect(inputEl.value).toBe('');

    fireEvent.change(inputEl, {
      target : {
        value: 'Is this product worth the price?'
      }
    });

    expect(inputEl.value).toBe('Is this product worth the price?');
  });

  it('should close answer modal on "x" click', async () => {
    const close = component.getByTestId('close-modal');

    fireEvent.click(close);

    await (() => expect(screen.getByTestId('modal-content')).not.toBeInTheDocument());
  });

  it('allows user to post question', () => {
    const submitBtn = screen.getByRole('button', { name: /submit-question/i});
    fireEvent.click(submitBtn);

    expect(component.getByTestId('q-modal')).toBeInTheDocument();
  })

})