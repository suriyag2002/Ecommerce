import React from 'react';
import { AiFillInstagram, AiOutlineTwitter,AiOutlineWhatsApp} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 Suriya - Amazon Clone All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiOutlineWhatsApp />
      </p>
    </div>
  )
}

export default Footer