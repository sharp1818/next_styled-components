import React from "react";
import axios from "axios";
import NavComponent from "../components/Nav/NavComponent";
import PromoCard from "../components/Promociones/PromoCard";
import { Container, PromoTitle } from "../components/Promociones/Promo.style";
import { PromoBox} from "../styles/promociones/style";

const promociones = ({ promos }) => {
  return (
    <>
      <NavComponent
        page_title={"Promociones"}
        id_1={"#nuestrasPromos"}
        title_id_1={"Nuestras Promos"}
        id_2={"#agendaCita"}
        title_id_2={"Regala una Gift Card"}
      />
      <PromoBox id="nuestrasPromos">
        <PromoTitle>Promos del mes</PromoTitle>
      <Container>
        <div className="promo-container">
          {promos.map((promo) => (
            <PromoCard
              key={promo.id}
              name={promo.promo_name}
              price={promo.price}
              discount={promo.discount}
              photo={promo.photo}
            />
          ))}
        </div>
      </Container>
      </PromoBox>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { data } = await axios.get("http://localhost:3000/api/promociones");

  return {
    props: {
      promos: data,
    },
  };
};

export default promociones;
