import React from 'react';
import ReactDOM from 'react-dom';
import QuestionEntry from '../../client/src/components/Q&A/questionComponents/QuestionEntry.jsx';
import AnswerModal from '../../client/src/components/Q&A/modalComponents/AnswerModal.jsx';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

const testQuestion =  {
  "question_id": 516821,
  "question_body": "Sed aspernatur totam neque impedit.",
  "question_date": "2021-08-02T00:00:00.000Z",
  "asker_name": "Mae_Hilll",
  "question_helpfulness": 0,
  "reported": false,
  "answers": {
      "4841056": {
          "id": 4841056,
          "body": "Voluptatem iste corporis.",
          "date": "2021-02-15T00:00:00.000Z",
          "answerer_name": "Mariam99",
          "helpfulness": 10,
          "photos": [
              "https://images.unsplash.com/photo-1516684810863-e49c82f1f092?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=965&q=80"
          ]
      },
      "4841057": {
          "id": 4841057,
          "body": "Ipsa eum doloremque quos.",
          "date": "2021-07-31T00:00:00.000Z",
          "answerer_name": "Afton_Kulas",
          "helpfulness": 17,
          "photos": [
              "https://images.unsplash.com/photo-1514613818067-e207c3441db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          ]
      },
      "4841058": {
        "id": 4841058,
        "body": "Ipsa eum iste quos.",
        "date": "2021-04-31T00:00:00.000Z",
        "answerer_name": "Jane398",
        "helpfulness": 10,
        "photos": [
            "https://images.unsplash.com/photo-1514613818067-e207c3441db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        ]
    }
  }
}

describe('<QuestionEntry />', () => {

  let component;

  beforeEach(() => {
    component = render(<QuestionEntry question={testQuestion}/>);
  })

  it('renders QuestionEntry component without crashing', () => {
    const questionEntry = component.getByTestId('q-entry');
    expect(questionEntry).toBeInTheDocument();
  });

  it('renders the question body', () => {
    const question = screen.getByText(`Q: ${testQuestion.question_body}`);
    expect(question).toBeInTheDocument();
  });

  it('renders "LOAD MORE ANSWERS" button if the question has 2+ answers', () => {
    const button = screen.getByRole('button', { name: /load-btn/i});
    expect(button).toHaveTextContent('LOAD MORE ANSWERS');
  });

  it('renders helpful button', () => {
    const button = screen.getByRole('button', { name: /helpful-btn/i});
    expect(button).toBeInTheDocument();
  });

  it('renders "Add Answer" button', () => {
    const button = screen.getByRole('button', { name: /add-answer-btn/i});
    expect(button).toBeInTheDocument();
  });

  it('allows user to mark question as helpful, helpfulness int should increase by 1', () => {
    const button = screen.getByRole('button', { name: /helpful-btn/i});

    fireEvent.click(button);
    expect(button).toHaveTextContent(`Yes (${testQuestion.question_helpfulness})`);
  });

  it('should open answer modal on "Add Answer" click', () => {
    const { getByTestId } = render(<AnswerModal />);
    const answerModal = screen.getAllByTestId('a-modal')[0];
    const button = screen.getByRole('button', { name: /add-answer-btn/i});

    fireEvent.click(button);
    expect(answerModal).toBeInTheDocument();
  })

});