import axios from "axios";
import { useForm } from "react-hook-form";
import React from "react";
import { useState } from "react";
import {
  FormTitle,
  FormBox,
  FormLayout,
  InputBox,
  LabelBox,
  SendButton,
  AlertError,
  TextBox,
} from "../Servicios/Services.style";

import {
  TextBoxContainer,
} from './Contact.styles'

const ContactForm = () => {
  const [info, setInfo] = useState({
    yourname: "",
    lastname: "",
    phone: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setInfo({ ...info, [name]: value });
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    const res = await axios.post("api/contacto", info).then(reset());
  };

  return (
    <>
      <FormBox>
        <FormTitle>Contacto</FormTitle>
        <FormLayout onSubmit={handleSubmit(onSubmit)}>
          <LabelBox htmlFor="yourname">Nombre:</LabelBox>
          <InputBox
            {...register("yourname", {
              required: true,
              maxLength: 30,
              pattern: /^[A-Za-z ÁÉÍÓÚáéíóúñÑ]+$/i,
            })}
            type="text"
            name="yourname"
            placeholder="Ingresa tu Nombre"
            onChange={handleChange}
          />
          {errors.yourname && (
            <div>
              {errors.yourname?.type === "required" && (
                <AlertError>Por favor, ingresa tu nombre</AlertError>
              )}
              {errors.yourname?.type === "maxLength" && (
                <AlertError>Se admite 30 letras como máximo</AlertError>
              )}
              {errors.yourname?.type === "pattern" && (
                <AlertError>Se admite letras [ a-z ] y [ A-Z ]</AlertError>
              )}
            </div>
          )}
          <LabelBox htmlFor="lastname">Apellido:</LabelBox>
          <InputBox
            {...register("lastname", {
              required: true,
              maxLength: 30,
              pattern: /^[A-Za-z ÁÉÍÓÚáéíóúñÑ]+$/i,
            })}
            type="text"
            name="lastname"
            placeholder="Ingresa tu Apellido"
            onChange={handleChange}
          />
          {errors.lastname && (
            <div>
              {errors.lastname?.type === "required" && (
                <AlertError>Por favor, ingresa tu apellido</AlertError>
              )}
              {errors.lastname?.type === "maxLength" && (
                <AlertError>Se admite 30 letras como máximo</AlertError>
              )}
              {errors.lastname?.type === "pattern" && (
                <AlertError>Se admite letras [ a-z ] y [ A-Z ]</AlertError>
              )}
            </div>
          )}
          <LabelBox htmlFor="phone">Celular:</LabelBox>
          <InputBox
            {...register("phone", {
              required: true,
              maxLength: 15,
              pattern: /^[0-9+() ]+$/i,
            })}
            type="text"
            name="phone"
            placeholder="Ingresa tu Celular"
            onChange={handleChange}
          />
          {errors.phone && (
            <div>
              {errors.phone?.type === "required" && (
                <AlertError>Por favor, ingresa tu celular</AlertError>
              )}
              {errors.phone?.type === "maxLength" && (
                <AlertError>Se admite 15 números como máximo</AlertError>
              )}
              {errors.phone?.type === "pattern" && (
                <AlertError>Se admite números [ 0-9 ]</AlertError>
              )}
            </div>
          )}
          <LabelBox htmlFor="message">Mensaje:</LabelBox>
          <TextBoxContainer>
            <TextBox
              {...register("message", {
                required: true,
                maxLength: 300,
                pattern: /^[A-Za-z ÁÉÍÓÚáéíóúñÑ]+$/i,
              })}
              type="text"
              name="message"
              placeholder="Ingresa tu Mensaje"
              onChange={handleChange}
            />
          </TextBoxContainer>
          {errors.message && (
            <div>
              {errors.message?.type === "required" && (
                <AlertError>Por favor, ingresa tu mensaje</AlertError>
              )}
              {errors.message?.type === "maxLength" && (
                <AlertError>Se admite 300 letras como máximo</AlertError>
              )}
              {errors.message?.type === "pattern" && (
                <AlertError>Se admite letras [ a-z ] y [ A-Z ]</AlertError>
              )}
            </div>
          )}
          <SendButton>Enviar</SendButton>
        </FormLayout>
      </FormBox>
    </>
  );
};

export default ContactForm;
