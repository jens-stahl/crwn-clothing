import React from 'react';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {Link} from 'react-router-dom';


const Header = () =>   (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
        </div>
    </div>
)

export default Header;