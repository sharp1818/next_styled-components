import React from "react";
import Link from "next/dist/client/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  FooterLayout,
  ContactLayout,
  ContactInfo,
  ButtonPromo,
  ContactTitle,
  FollowIcons,
  Copyright,
} from "./Footer.styles";
import { GrFacebook, GrInstagram } from "react-icons/gr";
import { HiLocationMarker, HiMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  const router = useRouter();
  return (
    <>
      <FooterLayout>
        {router.pathname == "/contacto" ? (
          ""
        ) : (
          <ContactLayout>
            {router.pathname == "/promociones" ? (
              <ContactInfo>
                <ContactTitle>Visítanos</ContactTitle>
                <a>
                  <span>Lunes a Viernes</span> 09am - 07pm
                </a>
                <a>
                  <span>Sábados y Domingos</span> 09am - 03pm
                </a>
                <Link href="/servicios" passHref>
                  <ButtonPromo>Mira Nuestros Servicios</ButtonPromo>
                </Link>
              </ContactInfo>
            ) : (
              <ContactInfo>
                <ContactTitle>Visítanos</ContactTitle>
                <a>
                  <span>Lunes a Viernes</span> 09am - 07pm
                </a>
                <a>
                  <span>Sábados y Domingos</span> 09am - 03pm
                </a>
                <Link href="/promociones" passHref>
                  <ButtonPromo>Mira Nuestras Promociones</ButtonPromo>
                </Link>
              </ContactInfo>
            )}
            <ContactInfo>
              <ContactTitle>Contacto</ContactTitle>
              <a href="tel:+51 999 999 999" target="_blank" rel="noreferrer">
                <span>
                  <FaPhoneAlt style={{ fontSize: "14px" }} /> Celular
                </span>{" "}
                +51 999 999 999
              </a>
              <a
                href="mailto: adrian.shura18@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <HiMail style={{ fontSize: "18px" }} /> Email
                </span>{" "}
                info@selyn_spa.com.pe
              </a>
              <a
                href="https://www.google.com/maps/place/Jr.+27+de+Agosto+245,+Carmen+de+La+Legua+-+Reynoso+07006/@-12.0391284,-77.0853122,17z/data=!4m5!3m4!1s0x9105ceb38a4ec223:0x955fc6f8e930a3b!8m2!3d-12.0393488!4d-77.0853873"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <HiLocationMarker style={{ fontSize: "18px" }} /> Dirección
                </span>{" "}
                27 de Agosto 245 - Reynoso
              </a>
            </ContactInfo>
          </ContactLayout>
        )}
        <Copyright>
          <FollowIcons>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <GrFacebook
                style={{ fontSize: "28px", color: "rgb(85, 80, 82)" }}
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <GrInstagram
                style={{ fontSize: "28px", color: "rgb(85, 80, 82)" }}
              />
            </a>
          </FollowIcons>
          ©2022 Selyn Peluquería & Spa.
          <span>Todos los Derechos Reservados. </span>
        </Copyright>
      </FooterLayout>
    </>
  );
};

export default Footer;
