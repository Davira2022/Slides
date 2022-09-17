import React from 'react'

export default function Header() {
  return (
    <header>
        <div>
            <span className='logo'>Macaron Bar</span>
            <ul className='nav'>
                <li>About us</li>
                <li>Contacts</li>
                <li>My Account</li>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
