import { useState } from 'react'
import './App.css'

// Importaciones de imágenes
import heartImage from './assets/corazon_monstruo.png'
import birdImage from './assets/pajaro.png'

function App() {
  return (
    <div className="container">
      {/* --- NAVBAR --- */}
      <nav className="navbar">
        <div className="logo">MONSTRUO</div>
        
        <ul className="menu">
          <li><a href="#libretas">LIBRETAS</a></li>
          <li><a href="#eventos">EVENTOS</a></li>
          <li><a href="#universo">NUESTRO UNIVERSO</a></li>
        </ul>

        <button className="btn-tienda">
          CONTACTANOS 🛒
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="hero">
        
        {/* TEXTO DE FONDO (TALL - ER) */}
        <div className="bg-text tall">TALL</div>
        <div className="bg-text er">ER</div>

        {/* TÍTULO PRINCIPAL (Lo recuperamos) */}
        <h1 className="main-title">MONSTRUO</h1>
        
        {/* IMAGEN DEL CORAZÓN */}
        <div className="hero-image-container">
           <img src={heartImage} alt="Corazón Monstruo" className="heart-img" />
        </div>

        {/* TEXTOS INFERIORES */}
        <div className="hero-text">
          <h2>LO LLAMAMOS MONSTRUO</h2>
          
          <div style={{margin: '20px 0'}}>
             <img src={birdImage} alt="Pájaro" style={{width: '120px', opacity: 0.9}}/>
          </div>

          <h3>PORQUE ES IMAGINARIO...</h3>
          <p>Y NADIE SABE COMO ES</p>
        </div>
      </header>
    </div>
  )
}

export default App