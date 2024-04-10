import Image from 'next/image'
import { Link } from 'react-router-dom'

import logo from '../imgs/logo.png'
import cart from '../imgs/cart.png'
import user from '../imgs/user.png'


const Header = () => {
    return (
        <>
            <section className='header'>
                <div className='upperHeader'>
                    <div className='logoContainer'>
                        <Link to='/'>
                            <Image width="200" className='icon' src={logo} alt='logo' />
                        </Link>
                    </div>

                    <div className='icons'>
                        <Link to="none" className='cart clickable'>
                            <Image width="50" className='clickButton' src={cart} alt='cart' />
                        </Link>

                        <Link to="none" className='user clickable'>
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