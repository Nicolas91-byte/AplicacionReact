import React, { useState, useEffect } from 'react';

function PersonalInfo(props) {
  // Definimos el estado para la imagen actual
  const [currentImage, setCurrentImage] = useState(props.imagen);

  // Función para cambiar la imagen cada 7499ms
  useEffect(() => {
    const interval = setInterval(() => {
      // Cambiar la imagen entre "image.jpg" y "image2.jpg"
      setCurrentImage(prevImage => 
        prevImage === "image.jpg" ? "image2.jpg" : "image.jpg"
      );
    }, 7499);
    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, []); // El efecto se ejecuta solo una vez al montar el componente

  return (
    <section className="personal-info">
      <h2>Información Personal</h2>
      <div className="info-item">
        <p>Nombre: {props.nombre}</p>
      </div>
      <div className="info-item">
        <p>Edad: {props.edad} años</p>
      </div>
      <div className="info-item">
        <p>Ubicación: {props.ubicacion}</p>
      </div>
      <div className="info-item">
        <p>Descripción: {props.descripcion}</p>
      </div>
      <div id="info-img">
        {/* Utilizamos la imagen actual del estado */}
        <img className="profile-img" src={currentImage} width="30%" height="30%" alt="Imagen personal" />
      </div>
    </section>
  );
}

export default PersonalInfo;
