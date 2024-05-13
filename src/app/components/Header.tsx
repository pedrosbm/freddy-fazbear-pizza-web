import Image from 'next/image'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import logo from '../imgs/logo.png'
import cart from '../imgs/cart.png'
import user from '../imgs/user.png'

import '../styles/header/Header.css'

const Header = () => {

    return (
        <>
            <section className='header'>
                <div className='upperHeader'>
                    <div className='logoContainer'>
                        <Link to='/'>
                            <Image width="180" className='icon' src={logo} alt='logo' />
                        </Link>
                    </div>

                    <div className='icons'>
                        <Link to="/Cart" className='cart clickable'>
                            <Image width="50" className='clickButton' src={cart} alt='cart' />
                            <p className='counter'>{localStorage.getItem("cartCount")}</p>
                        </Link>

                        <Link to={localStorage.getItem("logado") == "true" ? "/Account" : "/SignUp"} className='user clickable'>
                            <Image width="50" src={user} alt='user' />
                        </Link>
                    </div>
                </div>

                <div className='downHeader'>
                    <nav>
                        <ul>
                            <li>MENU</li>
                            <li>DRINKS</li>
                            <li>DESSERT</li>
                            <li>OFFER</li>
                            <li>ABOUT US</li>
                        </ul>
                    </nav>
                </div>
            </section>
        </>
    )
}

export default Header