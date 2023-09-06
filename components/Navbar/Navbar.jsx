import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <nav className='navbar'>
        <div className="navbar-container">
            <a href="/" className="navbar-item">Web Sr.Batata</a>
            <a href="/sobre" className="navbar-item">Sobre</a>
            <a href="/anotacoes" className="navbar-item">Anotações</a>
            <a href="/blog" className="navbar-item">Blog</a>
            <a href="/noticias" className="navbar-item">Notícias</a>
        </div>
    </nav>
  )
}

export default Navbar