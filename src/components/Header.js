import React, { useState } from 'react';
import './Header.css';
import sumitPhoto from '../assets/sumit.jpg';

function Header({ setActiveSection }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePhotoClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header>
      <div className="profile-container">
        <img
          src={sumitPhoto}
          alt="Sumit Bairola"
          className="profile-photo"
          onClick={handlePhotoClick}
        />
        <h1>Sumit Bairola</h1>
      </div>
      <nav>
        <button onClick={() => setActiveSection('about')}>About Me</button>
        <button onClick={() => setActiveSection('skills')}>Skills</button>
        <button onClick={() => setActiveSection('contact')}>Contact</button>
      </nav>

      {isModalOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <img src={sumitPhoto} alt="Sumit Bairola" className="modal-photo" />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
