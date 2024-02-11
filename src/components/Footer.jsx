
import React from 'react';

function Footer(props) {
  return (
    <footer>
      <div className="contact-info">
        <p>Contacto: {props.contacto}</p>
      </div>
      <div className="social-links">
        <a href="https://www.facebook.com"><img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_de_Facebook.png" alt="Facebook" /></a>
        <a href="https://www.twitter.com"><img src="https://graffica.ams3.digitaloceanspaces.com/2023/07/rQYXqS5v-F1ySdm9WYAIbjHo-1024x1024.jpeg" alt="Twitter" /></a>
        <a href="https://www.instagram.com"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="Instagram" /></a>
      </div>
      <div className="creative-commons">
        <p>This work is marked with <a href="http://creativecommons.org/publicdomain/zero/1.0?ref=chooser-v1" target="_blank" rel="noopener noreferrer">CC0 1.0</a></p>
      </div>
    </footer>
  );
}

export default Footer;
