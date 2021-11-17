import React from 'react';
import ReactDOM from 'react-dom';
import AnswerModal from '../../client/src/components/Q&A/modalComponents/AnswerModal.jsx';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import regeneratorRuntime from "regenerator-runtime";

describe('<AnswerModal />', () => {

  let component;

  beforeEach(() => {
    component = render(<AnswerModal showModal={true} setShowModal={() => {}}/>);
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

  it('changes value on name input field', () => {
    const inputEl = component.getByTestId('name');

    expect(inputEl.value).toBe('');

    fireEvent.change(inputEl, {
      target : {
        value: 'Chris986'
      }
    });

    expect(inputEl.value).toBe('Chris986');
  });

  it('changes value on email input field', () => {
    const inputEl = component.getByTestId('email');

    expect(inputEl.value).toBe('');

    fireEvent.change(inputEl, {
      target : {
        value: 'chris986@example.com'
      }
    });

    expect(inputEl.value).toBe('chris986@example.com');
  });

  it('changes value on answer input field', () => {
    const inputEl = component.getByTestId('answer');

    expect(inputEl.value).toBe('');

    fireEvent.change(inputEl, {
      target : {
        value: 'This product is very good'
      }
    });

    expect(inputEl.value).toBe('This product is very good');
  });

  it('allows user to upload images', async () => {
    const inputField = component.getByTestId('image-upload');

    await waitFor(() => {
      fireEvent.change(inputField, {
        target: {
          files: [new File(['(⌐□_□)'], 'test.png', { type: 'image/png' })]
        }
      });
    });

    let image = component.getByTestId('image-upload');
    expect(image.files[0].name).toBe('test.png');
    expect(image.files.length).toBe(1);
  });

  it('should close answer modal on "x" click', async () => {
    const close = component.getByTestId('close');

    fireEvent.click(close);

    await (() => expect(screen.getByTestId('modal-cont')).not.toBeInTheDocument());
  })
});