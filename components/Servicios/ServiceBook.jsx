import axios from "axios";
import { useForm } from "react-hook-form";
import React from "react";
import { useState } from "react";
import {
  FormTitle,
  FormBox,
  FormLayout,
  InputBox,
  SelectBox,
  LabelBox,
  SendButton,
  AlertError,
} from "./Services.style";

const ServiceBook = () => {
  const [info, setInfo] = useState({
    yourname: "",
    lastname: "",
    phone: "",
    service: "",
    day: "",
    hour: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setInfo({ ...info, [name]: value });
  };

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    const res = await axios.post("api/servicios", info).then(reset());
    console.log(res);
  };

  return (
    <>
      <FormBox>
        <FormTitle>Agenda</FormTitle>
        <FormLayout onSubmit={handleSubmit(onSubmit)}>
          <LabelBox htmlFor="yourname">Nombre:</LabelBox>
          <InputBox
            {...register("yourname", {
              required: true,
              maxLength: 30,
              pattern: /^[A-Za-z]+$/i,
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
              pattern: /^[A-Za-z]+$/i,
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
              pattern: /^[0-9+()]+$/i,
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
          <LabelBox htmlFor="service">Servicio</LabelBox>
          <SelectBox
            {...register("service", { required: true })}
            name="service"
            defaultValue={""}
            onChange={handleChange}
          >
            <option value="" hidden disabled>
              Selecciona un Servicio
            </option>
            <option value="Manicure & Pedicure">Manicure & Pedicure</option>
            <option value="Corte & Coloración de Cabello">Corte & Coloración de Cabello</option>
            <option value="Pestañas & Cejas">Pestañas & Cejas</option>
            <option value="Peinados, Tratamientos & Alisados">Peinados, Tratamientos & Alisados</option>
            <option value="Selyn Esthetic">Selyn Esthetic</option>
            <option value="Eventos">Eventos</option>
          </SelectBox>
          {errors.service && (
            <div>
              {errors.service?.type === "required" && (
                <AlertError>Por favor, seleccione un servicio</AlertError>
              )}
            </div>
          )}
          <LabelBox htmlFor="day">Día:</LabelBox>
          <InputBox
            {...register("day", {
              required: true,
            })}
            type="date"
            name="day"
            onChange={handleChange}
          />
          {errors.day && (
            <div>
              {errors.day?.type === "required" && (
                <AlertError>Por favor, elija una fecha</AlertError>
              )}
            </div>
          )}
          <LabelBox htmlFor="hour">Hora:</LabelBox>
          <InputBox
            {...register("hour", { required: true })}
            type="time"
            name="hour"
            onChange={handleChange}
          />
          {errors.hour && (
            <div>
              {errors.hour?.type === "required" && (
                <AlertError>Por favor, elija una hoa</AlertError>
              )}
            </div>
          )}
          <SendButton>Reservar</SendButton>
        </FormLayout>
      </FormBox>
    </>
  );
};

export default ServiceBook;
