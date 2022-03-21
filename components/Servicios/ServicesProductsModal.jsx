import React from "react";
import ServicePrice from "./ServicePrice";
import { ModalContainer, ProductsLayout, CloseButton } from "./Services.style";

const ServicesProductsModal = (props) => {
  const { category } = props;
  return (
    <>
      <ModalContainer>
        <ProductsLayout>
          {JSON.parse(category).map((service) => (
            <ServicePrice
              key={service.id}
              name={service.name}
              photo={service.photo}
              price={service.price}
            />
          ))}
        </ProductsLayout>
        <CloseButton onClick={() => props.changeState(false)}>
          Cerrar
        </CloseButton>
      </ModalContainer>
    </>
  );
};

export default ServicesProductsModal;
