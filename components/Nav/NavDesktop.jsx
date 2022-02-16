import React from 'react'
import Link from 'next/link'
import {ContainerNavMenu, OptionNavMenu} from './Nav.styles'

const NavDesktop = () => {
  return (
    <>
    <ContainerNavMenu>
        <Link href="/" passHref>
          <OptionNavMenu>
            Inicio
          </OptionNavMenu>
        </Link>
        <Link href="/menu-carta" passHref>
          <OptionNavMenu>
            Nuestra Carta
          </OptionNavMenu>
        </Link>
        <Link href="/delivery" passHref> 
          <OptionNavMenu>
            Delivery
          </OptionNavMenu>
        </Link>
    </ContainerNavMenu>
    </>
  )
}

export default NavDesktop