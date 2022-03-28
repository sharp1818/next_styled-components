import React from "react";
import Image from "next/image";
import { BoxCard, TitleCard, ImageFrame, Price } from "./Services.style";

const ServicePrice = (props) => {
  const { name, photo, price } = props;

  return (
    <>
      <BoxCard>
        <TitleCard>{name}</TitleCard>
        <ImageFrame>
          <Image
            src={`/images/servicios/${photo}.jpg`}
            alt={`${name}`}
            width={200}
            height={200}
            quality={100}
            objectFit="cover"
          />
        </ImageFrame>
        <Price>S/.{price}</Price>
        {/* {photo} */}
      </BoxCard>
    </>
  );
};

export default ServicePrice;
