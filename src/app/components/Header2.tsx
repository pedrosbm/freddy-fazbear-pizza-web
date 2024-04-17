import Image from 'next/image'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import logo from '../imgs/logo.png'

const Header2 = () => {

    return (
        <>
            <section className='header'>
                <div className='upperHeader'>
                    <div className='logoContainer'>
                        <Link to='/'>
                            <Image width="180" className='icon' src={logo} alt='logo' />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header2