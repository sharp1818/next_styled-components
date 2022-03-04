import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

import {ContainerNavMenu, OptionNavMenu} from './Nav.styles'


const NavDesktop = () => {
  
const router = useRouter();

  return (
    <>
    <ContainerNavMenu>
        <Link href="/" passHref>
          <OptionNavMenu pathName={router.pathname}>
            Inicio
          </OptionNavMenu>
        </Link>
        <Link href="/promociones" passHref>
          <OptionNavMenu pathName={router.pathname}>
            Promociones
          </OptionNavMenu>
        </Link>
        <Link href="/servicios" passHref>
          <OptionNavMenu pathName={router.pathname}>
            Servicios
          </OptionNavMenu>
        </Link>
        <Link href="/contacto" passHref> 
          <OptionNavMenu pathName={router.pathname}>
            Contacto
          </OptionNavMenu>
        </Link>
    </ContainerNavMenu>
    </>
  )
}

export default NavDesktop