import React from 'react'
import { Link } from '@remix-run/react'
import logo from "../../public/images/logo.png"

export default function Nav() {
  return (
    <main>
        {/* Menu for Mobile */}
        <div className='pt-2 flex items-center justify-between lg:hidden'>
            <Link to="/"><div className=''><img src={logo} alt="logo" className='w-12 rounded-lg'/></div></Link>
            <button id="burger menu" className='block'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>            
            </button>
        </div>
    </main>
  )
}
