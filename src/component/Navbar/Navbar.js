import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className='bg-light d-flex justify-content-center align-items-center'>
            <ul className='d-flex gap-4'>
                <NavLink className='link' to='/'><li role='button' className='list-group-item'><i className="bi bi-house-add"></i> Home </li></NavLink>

                <NavLink className='link' to='/running'><li role='button' className='list-group-item'><i className="bi bi-fast-forward-circle-fill"></i> Running </li></NavLink>
                <NavLink className='link' to="/complete"><li role='button' className='list-group-item'><i className="bi bi-bookmark-check-fill"></i> Finish</li></NavLink>
            </ul>
        </div>
    )
}

export default Navbar