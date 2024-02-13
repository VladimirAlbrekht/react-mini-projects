import { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(!isOpen);
    console.log("open");
  }

  function closeModal() {
    setIsOpen(!isOpen);
    console.log("close");
  }

  return (
    <>
      <button onClick={openModal} className="btn btn-info">
        Open
      </button>
      {isOpen && (
        <div className="overlay opened">
          <div className="modal__popup">
          <button onClick={closeModal} className="modal__close btn btn-info">
              Close
            </button>
            <h2 className="modal__title">My modal</h2>
            <img
              src="https://i2.wp.com/miro.medium.com/1*V7UIIU0G4pK15vtd8vSgiQ.jpeg"
              alt="react logo"
              className="modal__img"
            />
         
          </div>
        </div>
      )}
    </>
  );
}
