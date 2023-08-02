import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { MenuItems } from './MenuItems'
import './Navbar.css'

const Navbar = () => {
    const refOne = useRef<HTMLDivElement>(null)
    const [show, setShow] = useState(false)

    useEffect(() => {
        document.body.classList.toggle('no-scroll', show);
    }, [show])

    const handleMenu = () => {
        setShow(!show)
    }

    useEffect(() => {
        const closeMenu = ({ target }: MouseEvent): void => {

            if (!refOne.current?.contains(target as Node)) {
                setShow(false)
            }
        }
        document.addEventListener('click', closeMenu)
    }, [])

    return (
        <header>
            <nav className="container-md NavbarItems">
                <div className="navbar-logo"><i className="bi bi-alexa"></i></div>
                <div className="menu-icon" onClick={handleMenu} ref={refOne}>
                    <i className={show ? 'bi bi-x-lg' : 'bi bi-list'}></i>
                </div>

                {/* mobil menu */}
                <div className={show ? 'ul-cont active-menu' : 'ul-cont'}>
                    <ul className='nav-menu'>
                        {
                            MenuItems.map((item) => {
                                return (
                                    <li key={item.title}>
                                        <NavLink className={item.cName} to={item.url}>{item.title}</NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>

                </div>

                {/* desktop menu */}
                <div className='desktop'>
                    <ul className='nav-menu-desk'>
                        {
                            MenuItems.map((item) => {
                                return (
                                    <li key={item.title}>
                                        {
                                            <NavLink className={({ isActive }) => isActive ? `active ${item.cName}` : item.cName} to={item.url}>{item.title}</NavLink>
                                        }

                                    </li>
                                )
                            })

                        }
                        <li>
                        </li>
                    </ul>

                </div>

            </nav>

        </header>
    )
}

export default Navbar