import React, {useState} from 'react'
import Link from 'next/dist/client/link'
import {
  ContainerMobileMenu, 
  MobileMenu, 
  OptionMenu, 
} from './Nav.styles'
import { IconContext } from 'react-icons'
import {HiMenu} from 'react-icons/hi'
import {RiHomeSmile2Fill} from 'react-icons/ri'
import {RiHandHeartFill} from 'react-icons/ri'
import {BiHappyBeaming} from 'react-icons/bi'
import {GrContact} from 'react-icons/gr'

const NavMobile = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
    <div onClick={()=>setShowMobileMenu(!showMobileMenu)}>
      <HiMenu style={{color: 'rgb(85, 80, 82)', fontSize: '40px'}}/>
    </div>
    <ContainerMobileMenu open={showMobileMenu}>
      <MobileMenu>
        <IconContext.Provider value={{style: {fontSize: '24px'}}}>
          <Link href="/">
            <OptionMenu onClick={()=>setShowMobileMenu(!showMobileMenu)}>
              <RiHomeSmile2Fill /> Inicio
            </OptionMenu>
          </Link>
          <Link href="/promociones">
            <OptionMenu onClick={()=>setShowMobileMenu(!showMobileMenu)}>
              <BiHappyBeaming/> Promociones
            </OptionMenu>
          </Link>
          <Link href="/servicios">
            <OptionMenu onClick={()=>setShowMobileMenu(!showMobileMenu)}>
              <RiHandHeartFill/> Servicios
            </OptionMenu>
          </Link>
          <Link href="/contacto">
            <OptionMenu onClick={()=>setShowMobileMenu(!showMobileMenu)}>
              <GrContact/> Contacto
            </OptionMenu>
          </Link>
        </IconContext.Provider>
      </MobileMenu>
    </ContainerMobileMenu>
    </>
  )
}

export default NavMobile