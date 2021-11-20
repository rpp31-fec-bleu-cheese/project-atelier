import React, {useState} from 'react';
import PropTypes from 'prop-types';
import QuestionModal from './modalComponents/QuestionModal.jsx';

class FooterButtons extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false
    }

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { questionsLength, handleClick, productID, currentProduct, getQuestions, productName } = this.props;

    return (
      <div data-testid='footer-btns' className="footer-buttons">
        { questionsLength > 2 ?
          (<button aria-label='more-questions' className="additional-answers-button" onClick={handleClick}>MORE ANSWERED QUESTIONS</button>)
          : null
        }
        <button aria-label='add-question-btn' className="add-question-button" onClick={() => this.setState({ showModal: true })}>ADD A QUESTION +</button>
        <QuestionModal
          showModal={this.state.showModal}
          closeModal={this.closeModal}
          productID={productID}
          currentProduct={currentProduct}
          getQuestions={getQuestions}
        />
      </div>
    )
  }
}

FooterButtons.propTypes = {
  questionsLength: PropTypes.number,
  handleClick: PropTypes.func,
  productID: PropTypes.number,
  currentProduct: PropTypes.string,
  getQuestions: PropTypes.func
};

export default FooterButtons;