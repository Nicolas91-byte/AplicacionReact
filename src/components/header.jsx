// Header.js
import React from 'react';
 

function Header() {
  return (
    <header className="header">
      <div className="profile-header">
        <img className="imagenIzquierda" src="imageUser1.jpg" alt="Imagen de usuario izquierda" />
        <h1>Jesucristo</h1>
        <img className="imagenUsuario" src="userImage.gif" alt="Imagen de usuario" />
      </div>
    </header>
  );
}

export default Header;
