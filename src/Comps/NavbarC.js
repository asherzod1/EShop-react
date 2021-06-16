import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {GoSearch} from 'react-icons/go'
import {AiFillHeart, AiOutlineShoppingCart} from 'react-icons/ai'
import {BiLogIn} from 'react-icons/bi'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
  import './NavbarFooter.scss'
  
const NavbarC = () => {

        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen);
        
    return (
        <div className='light'>
            <div className="container">
                <div className="left">
                    <Navbar light expand="md">
                        <NavbarBrand href="/"><img src="images/logo.png" className='logo' alt="logo"/></NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar className='justify-content-between'>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                <NavLink href="/category/">Категории</NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink href="/partner/">Партнеры</NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink href="/servis/">Сервисные центры</NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink href="/news/">Новости</NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink href="/jobs/">Вакансии</NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink href="/contact/"> Контакты</NavLink>
                                </NavItem>
                            </Nav>
                            <div className="right">
                                <Link className='icons'>
                                    <GoSearch  />
                                </Link>
                                <Link className='icons'>
                                    <AiFillHeart />
                                    <span className='like-count'>0</span>
                                </Link>
                                <Link className='icons'>
                                    <AiOutlineShoppingCart />
                                    <span className='cart-count'>0</span>
                                </Link>
                                <Link className='icons'>
                                    <BiLogIn />
                                </Link>
                            </div>
                        </Collapse>
                    </Navbar>
                </div>
                
            </div>
        </div>
    )
}

export default NavbarC
