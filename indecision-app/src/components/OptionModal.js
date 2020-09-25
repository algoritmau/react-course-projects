import React from 'react';
import Modal from 'react-modal';

const OptionModal = props => (
  <Modal 
    isOpen={!!props.suggestedOption}
    onRequestClose={props.handleCloseModal}
    contentLabel="Suggested Option"
  >
    <h3>Suggested Option</h3>
    {props.suggestedOption && <p>{props.suggestedOption}</p>}
    <button onClick={props.handleCloseModal}>Okay</button>
  </Modal>
);

export default OptionModal;