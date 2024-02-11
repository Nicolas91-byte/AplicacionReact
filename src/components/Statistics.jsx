import React from 'react';

function Statistics(props) {
  return (
    <section className="statistics">
      <h2>Estadísticas</h2>
      <div className="stat-item">
        <p>Seguidores: {props.seguidores}</p>
      </div>
      <div className="stat-item">
        <p>Seguidos: {props.seguidos}</p>
      </div>
      <div className="stat-item">
        <p>Publicaciones: {props.publicaciones}</p>
      </div>
    </section>
  );
}

export default Statistics;
