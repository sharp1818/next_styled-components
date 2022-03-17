import React, {useState} from 'react'
import Image from 'next/image'
import {
  ServiceBoxLayout, 
  WrapLeft, 
  Background, 
  ImageLayout, 
  PrimaryImage, 
  SecundaryImage,
  WrapRight,
  Title,
  Name,
  Description,
  List,
  Option,
  ButtonOpenPrices
} from './Services.style'
import {BsCheck} from 'react-icons/bs'
import {MdWaves} from 'react-icons/md'
import ServicesProductsModal from './ServicesProductsModal'

const ServicesBox = (props) => {
  const [showModal, SetShowModal] = useState(false)
  const buttonHandler = () => {
    SetShowModal(true)
  }
  const {id, name, description, info1, info2, info3, info4, photo1, photo2, products} = props
  return (
    <>
    <ServiceBoxLayout>
      <WrapLeft>
        <Background>
          <Image
            src={`/images/servicios/background/fondo.png`}
            alt='picture'
            width={540}  
            height={660} 
            quality={100}
            objectFit="cover"
          />
        </Background>
        <ImageLayout>
          <PrimaryImage>
            <Image
              src={`/images/servicios/${photo1}.jpg`}
              alt='picture'
              width={370}  
              height={490} 
              quality={100}
              objectFit="cover"
            />
          </PrimaryImage>
          <SecundaryImage>
            <Image
              src={`/images/servicios/${photo2}.jpg`}
              alt='picture'
              width={300}  
              height={300} 
              quality={100}
              objectFit="cover"
            />
          </SecundaryImage>
        </ImageLayout>
      </WrapLeft>
      <WrapRight>
        <Title><span>0{id}</span><span>.</span><span><MdWaves/></span></Title>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <List>
          <Option><span><BsCheck/></span><span>{info1}</span></Option>
          <Option><span><BsCheck/></span><span>{info2}</span></Option>
          <Option><span><BsCheck/></span><span>{info3}</span></Option>
          <Option><span><BsCheck/></span><span>{info4}</span></Option>
        </List>
        <ButtonOpenPrices onClick={buttonHandler}>Lista de Precios</ButtonOpenPrices>
      </WrapRight>
    </ServiceBoxLayout>
    {
      showModal ? <ServicesProductsModal changeState={showModal=>SetShowModal(showModal)} category={products}/> : ''
    }
    </>
  )
}

export default ServicesBox