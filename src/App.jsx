import React from 'react';
import './styles.css'; 
import Header from './components/header';
import PersonalInfo from './components/PersonalInfo';
import Statistics from './components/Statistics';
import Others from './components/Others';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <PersonalInfo nombre="Jesucristo" edad={33} ubicacion="La Roda, España" descripcion="Casi tan famoso como los Beatles. No me gustan los gorilas." imagen="image.jpg" />
      <Statistics seguidores={287280000} seguidos={12} publicaciones={900} />
      <Others videoSource="dance.mp4" audioSource="Jesucristo.mp3"/>
      <Footer contacto="Yisus@example.com" facebookSrc="https://www.facebook.com" twitterSrc="https://www.twitter.com" instagramSrc="https://www.instagram.com" creativeCommonsSrc="http://creativecommons.org/publicdomain/zero/1.0?ref=chooser-v1" />
    </div>
  );
}

export default App;
