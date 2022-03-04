import React from 'react'
import { FooterLayout ,ContactInfo, FollowIcons, Copyright } from './Footer.styles'
import {GrFacebook,GrInstagram} from 'react-icons/gr'
import {HiPhone, HiLocationMarker, HiMail} from 'react-icons/hi'

const Footer = () => {
  return (
    <>
      <FooterLayout>
        <ContactInfo>
          <a 
            href="https://www.google.com/maps/place/Jr.+27+de+Agosto+245,+Carmen+de+La+Legua+-+Reynoso+07006/@-12.0391284,-77.0853122,17z/data=!4m5!3m4!1s0x9105ceb38a4ec223:0x955fc6f8e930a3b!8m2!3d-12.0393488!4d-77.0853873"
            target="_blank" 
            rel="noreferrer"
          >
            <HiLocationMarker style={{fontSize: '18px'}}/> 27 de Agosto 245 - Reynoso
          </a>
          <a 
            href="tel:999 999 999"
            target="_blank" 
            rel="noreferrer"
          >
            <HiPhone style={{fontSize: '18px'}}/> 999 999 999
          </a>
          <a 
            href="mailto: adrian.shura18@gmail.com"
            target="_blank" 
            rel="noreferrer"
          >
            <HiMail style={{fontSize: '18px'}}/> info@selyn_spa.com.pe
          </a>
        </ContactInfo>
        <FollowIcons>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <GrFacebook style={{fontSize: '28px', color: 'rgb(85, 80, 82)'}}/>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <GrInstagram style={{fontSize: '28px', color: 'rgb(85, 80, 82)'}}/>
          </a>
        </FollowIcons>
        <Copyright>
          ©2022 Selyn Peluquería & Spa.<span>Todos los Derechos Reservados. </span> 
        </Copyright>
      </FooterLayout>
    </>
  )
}

export default Footer