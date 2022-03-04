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
        <Link href="/promociones" passHref>
          <OptionNavMenu>
            Promociones
          </OptionNavMenu>
        </Link>
        <Link href="/servicios" passHref>
          <OptionNavMenu>
            Servicios
          </OptionNavMenu>
        </Link>
        <Link href="/contacto" passHref> 
          <OptionNavMenu>
            Contacto
          </OptionNavMenu>
        </Link>
    </ContainerNavMenu>
    </>
  )
}

export default NavDesktop