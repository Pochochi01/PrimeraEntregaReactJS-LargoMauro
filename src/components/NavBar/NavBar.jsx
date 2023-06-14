import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
        <h1>JatSport</h1>
        <nav>
            <ul>
                <li>Productos</li>
                <li>Detalles</li>
                <li>Compras</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar