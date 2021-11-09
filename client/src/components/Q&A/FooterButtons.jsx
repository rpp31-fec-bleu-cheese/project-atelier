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
    const { questionsLength, handleClick, productID, currentProduct, getQuestions } = this.props;

    return (
      <div className="footer-buttons">
        { questionsLength > 2 ?
          (<button className="additional-answers-button" onClick={handleClick}>MORE ANSWERED QUESTIONS</button>) : null
        }
        <button className="add-question-button" onClick={() => this.setState({ showModal: true })}>ADD A QUESTION +</button>
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

// const FooterButtons = ({ questionsLength, handleClick, productID, currentProduct, getQuestions }) => {
//   const [showModal, setShowModal] = useState(false);
//   // const openModal = () => {
//   //   setShowModal(true);
//   // }

//   const closeModal = () => {
//     setShowModal(false);
//   }

//   return (
//     <div className="footer-buttons">
//       { questionsLength > 2 ?
//         (<button className="additional-answers-button" onClick={handleClick}>MORE ANSWERED QUESTIONS</button>) : null
//       }
//       <button className="add-question-button" onClick={() => setShowModal(true)}>ADD A QUESTION +</button>
//       <QuestionModal
//         showModal={showModal}
//         setShowModal={setShowModal}
//         closeModal={closeModal}
//         productID={productID}
//         currentProduct={currentProduct}
//         getQuestions={getQuestions}
//       />
//     </div>
//   )
// };

FooterButtons.propTypes = {
  questionsLength: PropTypes.number,
  handleClick: PropTypes.func,
  productID: PropTypes.number,
  currentProduct: PropTypes.string,
  getQuestions: PropTypes.func
};

export default FooterButtons;