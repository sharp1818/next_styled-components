import React from 'react'
import { CardLayout } from './Promo.style';

const PromoCard = (props) => {
    const { name, price, discount, photo } = props;
  return (
      <>
      <CardLayout>
        <div>{name}</div>
        <div>{photo}</div>
        <div>{price}</div>
        <div>{discount}</div>
      </CardLayout>
      <CardLayout>
        <div>{name}</div>
        <div>{photo}</div>
        <div>{price}</div>
        <div>{discount}</div>
      </CardLayout>
      </>
  )
}

export default PromoCard