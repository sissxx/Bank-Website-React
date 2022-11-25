import React from 'react';
import {FaBars} from 'react-icons/fa'
import { Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu,
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElement';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        Bank
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' spy={true} smooth={true} offset={-80} duration={500}>
                                About Us
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover' spy={true} smooth={true} offset={-50} duration={500}>
                                Features
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services' spy={true} smooth={true} offset={-50} duration={500}>
                                Services
                            </NavLinks>
                        </NavItem>
                       
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>
                           Login
                        </NavBtnLink>
                        <NavBtnLink to='/signup'>
                            Register
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;

