import React from 'react'
import { IoMdGift } from "react-icons/io";
import {
    GiftCardLayout, DataBox, TitleBox, Data, ButtonLink
  } from "./Contact.styles"

const ContactGiftCard = () => {
  return (
    <GiftCardLayout>
        <DataBox>
          <TitleBox>
            <IoMdGift style={{ fontSize: "20px" }} />
            <span>Gifts Cards</span>
          </TitleBox>
          <Data>Válido para CUALQUIER</Data>
          <Data>promoción o servicio</Data>
          <ButtonLink>pídelas aqui</ButtonLink>
        </DataBox>
    </GiftCardLayout>
  )
}

export default ContactGiftCard