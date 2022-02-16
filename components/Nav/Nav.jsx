import React, {useState} from 'react'
import {
  NavShadow,
  NavContainer, 
  LogoMenuLayout,
  ContactContainer,
  DeliveryContainer,
  Info,
} from './Nav.styles'
import useScreenSize from '../../hooks/useScreenSize'
import Image from 'next/Image'
import Logo from '../../public/images/logo.svg'
import Link from 'next/dist/client/link'
import NavMobile from './NavMobile'
import NavDesktop from './NavDesktop'
import { IconContext } from 'react-icons'
import {RiPhoneLine} from 'react-icons/ri'
import {FaWhatsappSquare} from 'react-icons/fa'
const Nav = () => {
  const {width, height} = useScreenSize();

  return (
    <>
    <NavShadow>
      <NavContainer>
        <LogoMenuLayout>
          <div>
            <Link href="/">
              <a>
                <Image
                src={Logo}
                alt='Logo'
                width={62}  //187
                height={50}  //150
                />
              </a>
            </Link>
          </div>
          { width >= 920 
            ?<NavDesktop/>
            :<NavMobile/>
          }
        </LogoMenuLayout>
        <IconContext.Provider value={{color: 'rgb(27 64 73)'}}>
          <ContactContainer>
            <RiPhoneLine style={{fontSize: '40px'}}/>
            <DeliveryContainer>
              <Info>Delivery</Info>
              <Info>(01)777-7777</Info>
            </DeliveryContainer>
            <FaWhatsappSquare style={{fontSize: '40px'}}/>
          </ContactContainer>
        </IconContext.Provider> 
      </NavContainer>
    </NavShadow>
    </>
  )
}

export default Nav