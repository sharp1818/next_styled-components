import React from 'react'
import {
  NavComponentLayout
} from './Nav.styles'

const NavComponent = (props) => {
  const {page_title} = props
  return (
    <>
    <NavComponentLayout>
      <div>
      {page_title}
      </div>
    </NavComponentLayout>
    </>
  )
}

export default NavComponent