import React, {useState} from 'react'
import Link from 'next/dist/client/link'
import {
  ContainerMobileMenu, 
  MobileMenu, 
  OptionMenu, 
  ButtonCloseMenu
} from './Nav.styles'
import { IconContext } from 'react-icons'
import {
  FaHome, 
  FaWindowClose
} from 'react-icons/fa'
import {HiMenuAlt2} from 'react-icons/hi'
import {BiFoodMenu} from 'react-icons/bi'
import {MdOutlineDeliveryDining} from 'react-icons/md'

const NavMobile = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
    <div onClick={()=>setShowMobileMenu(!showMobileMenu)}>
      <HiMenuAlt2 style={{color: 'rgb(144 207 212)', fontSize: '40px'}}/>
    </div>
    <ContainerMobileMenu open={showMobileMenu}>
      <MobileMenu>
        <IconContext.Provider value={{style: {fontSize: '20px'}}}>
          <Link href="/">
            <OptionMenu onClick={()=>setShowMobileMenu(!showMobileMenu)}>
              <FaHome /> Inicio
            </OptionMenu>
          </Link>
          <Link href="/menu-carta">
            <OptionMenu onClick={()=>setShowMobileMenu(!showMobileMenu)}>
              <BiFoodMenu/> Nuestra Carta
            </OptionMenu>
          </Link>
          <Link href="/delivery">
            <OptionMenu onClick={()=>setShowMobileMenu(!showMobileMenu)}>
              <MdOutlineDeliveryDining/> Delivery
            </OptionMenu>
          </Link>
          <ButtonCloseMenu onClick={()=>setShowMobileMenu(!showMobileMenu)}>
            <FaWindowClose/> Cerrar
          </ButtonCloseMenu>
        </IconContext.Provider>
      </MobileMenu>
    </ContainerMobileMenu>
    </>
  )
}

export default NavMobile