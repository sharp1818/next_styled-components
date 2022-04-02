import React from "react";
import ContactForm from "../components/Contacto/ContactForm";
import ContactMap from "../components/Contacto/ContactMap";
import ContactData from "../components/Contacto/ContactData";
import NavComponent from "../components/Nav/NavComponent";
import { LayoutForm, Container } from "../styles/contacto/styles";
import ContactGiftCard from "../components/Contacto/ContactGiftCard";

const contacto = () => {
  return (
    <>
      <Container>
        {/* <NavComponent
          page_title={"Contacto"}
          id_1={"#contactar"}
          title_id_1={"Contactar"}
        /> */}
        <LayoutForm id="contactar">
          <div className="ContactFormLayout">
            <ContactForm />
          </div>
          <div className="ContactDataLayout">
            <ContactGiftCard />
            <ContactData />
          </div>
        </LayoutForm>
      </Container>
      <ContactMap />
    </>
  );
};

export default contacto;
