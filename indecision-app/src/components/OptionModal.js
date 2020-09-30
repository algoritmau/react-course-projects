import React from 'react';
import Modal from 'react-modal';

const OptionModal = props => (
  <Modal 
    isOpen={!!props.suggestedOption}
    onRequestClose={props.handleCloseModal}
    contentLabel="Suggested Option"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3>Suggested Option</h3>
    {props.suggestedOption && <p>{props.suggestedOption}</p>}
    <button className="btn" onClick={props.handleCloseModal}>Okay</button>
  </Modal>
);

export default OptionModal;