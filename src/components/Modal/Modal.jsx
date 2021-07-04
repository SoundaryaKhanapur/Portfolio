import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

const Modal = ({ closeModal }) => {
    // (e) => closeModal() or just closeModal() --- event bubbling
    return ReactDOM.createPortal(
        <div onClick={closeModal} className="modal-overlay">
            <div onClick={(e) => e.stopPropagation()} className="modal-container">
                <div className="upper-section">
                    <h1>Women In Tech initiative!</h1>
                    <p onClick={closeModal} className="close">&times;</p>
                </div>
                <div className="middle-section">
                    <h3>Watch my brief interview with Vaidehi Patil, unveiling our journey so far, discussing our paths, inspirations and where the women in tech stand today.</h3>
                    {/* <p>info on the blog</p> */}

                </div>
                <div className="lower-section">
                    <a onClick={closeModal} className="modal-btn btn-red">Close</a>
                    <a href="https://youtu.be/ExdiHfjp8nQ" target="_blank" rel="noreferrer"
                        className="modal-btn btn-green">Watch</a>
                </div>
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export default Modal