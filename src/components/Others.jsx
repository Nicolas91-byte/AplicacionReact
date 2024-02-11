import React from 'react';

function Others(props) {
  return (
    <section className="others">
      <h2>Otros</h2>
      <div className="others-item">
        <h3>Los movimientos prohibidos</h3>
        <video controls>
          <source src={props.videoSource} />
        </video>
      </div>
      <div className="others-item">
        <audio controls>
          <source src={props.audioSource} />
        </audio>
      </div>
    </section>
  );
}

export default Others;
