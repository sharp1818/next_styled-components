import React from "react";
import { ImMap2 } from "react-icons/im";
import { MdOutlineWatchLater } from "react-icons/md";
import { LayoutData, DataBox, TitleBox, Data, Ubication } from "./Contact.styles";

const ContactData = () => {
  return (
    <>
      <LayoutData>
        <DataBox>
          <TitleBox>
            <ImMap2 style={{ fontSize: "20px" }} />
            <span>Dirección</span>
          </TitleBox>
          <Ubication>Pje. 27 de Agosto 245</Ubication>
          <Data>Carmen de la Legua</Data>
          <Data>Reynoso, Callao</Data>
        </DataBox>
        <DataBox>
          <TitleBox>
            <MdOutlineWatchLater style={{ fontSize: "20px" }} />
            <span>Horario</span>
          </TitleBox>
          <Data>Lunes a Viernes :</Data>
          <Data>09am - 07pm</Data>
          <Data>Sábados y Domingos :</Data>
          <Data>09am - 03pm</Data>
        </DataBox>
      </LayoutData>
    </>
  );
};

export default ContactData;
