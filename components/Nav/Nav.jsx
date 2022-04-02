import React, {useState, useEffect} from 'react'
import {
  NavShadow,
  NavContainer, 
  LogoMenuLayout,
  LogoSvg,
  ContactContainer,
  DeliveryContainer,
  Info,
} from './Nav.styles'
import useScreenSize from '../../hooks/useScreenSize'
import Image from 'next/image'
import Logo from '../../public/images/logo.svg'
import Link from 'next/dist/client/link'
import NavMobile from './NavMobile'
import NavDesktop from './NavDesktop'
import { IconContext } from 'react-icons'
import {RiPhoneLine} from 'react-icons/ri'
import {FaWhatsappSquare} from 'react-icons/fa'
const Nav = () => {
  const {width} = useScreenSize();
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <>
    <NavShadow background={navbar}>
      <NavContainer>
        <LogoMenuLayout>
          <LogoSvg>
            <Link href="/">
              <a>
                <Image
                src={Logo}
                alt='Logo'
                width={91}  //182
                height={75}   //150
                />
              </a>
            </Link>
          </LogoSvg>
          { width >= 920 
            ?<NavDesktop/>
            :<NavMobile/>
          }
        </LogoMenuLayout>
        <IconContext.Provider value={{color: 'rgb(85, 80, 82)'}}>
          <ContactContainer>
            <a 
            href="tel:999 999 999"
            target="_blank" 
            rel="noreferrer"
            >
              <RiPhoneLine style={{fontSize: '40px'}}/>
            </a>
            <DeliveryContainer>
              <Info>Atención al cliente</Info>
              <Info>(01)777-7777</Info>
            </DeliveryContainer>
            <a 
              href="https://api.whatsapp.com/send?phone=51929377684&text=Deseo%20reservar%20una%20cita"
              target="_blank" 
              rel="noreferrer"
            >
              <FaWhatsappSquare style={{fontSize: '40px'}}/>
            </a>
          </ContactContainer>
        </IconContext.Provider> 
      </NavContainer>
    </NavShadow>
    </>
  )
}

export default Nav