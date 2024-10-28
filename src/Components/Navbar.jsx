import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='bg-main-light  py-4'>
            <div className='container flex justify-between relative'>
                <div className='text-blue-800'>Elevate challenge</div>

                <div className='flex gap-2'>
                    <ul className={`flex gap-2 `}>
                        <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink></li>
                        <li><NavLink to={'/categories'} className={({ isActive }) => isActive ? 'active-link' : ''}>Categories</NavLink></li>
                    </ul>
                    <div>

                    </div>

                </div>

            </div>
        </nav>
    )
}
