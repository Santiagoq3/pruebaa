import React from 'react'
import "./navbar.scss"
export const Navbar = () => {
  return (
    <header className='header'>
        <nav className='navbar'>
            <h1>Mi gestor</h1>
            <button>
                Logout
            </button>
        </nav>
    </header>
  )
}
