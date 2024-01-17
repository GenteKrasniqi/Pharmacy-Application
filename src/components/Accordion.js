import React, { useState } from 'react';

const Accordion = ({ id, p, h3 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`tab ${isOpen ? 'open' : ''}`}>
      <input type="radio" name="acc" id={'acc' + id} checked={isOpen} onChange={handleToggle} />
      <label htmlFor={'acc' + id} onClick={handleToggle}>
        <h3>{h3}</h3>
      </label>
      {isOpen && (
        <div className="contentParagraph">
        <p>{p}</p>
      </div>
      )}
    </div>
  );
};

export default Accordion;
