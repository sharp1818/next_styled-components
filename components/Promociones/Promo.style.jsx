import styled from "styled-components";
import COLORS from "../../styles/colors.jsx";

// Config Card
export const Container = styled.div`
  .promo-container {
    padding: 40px 0px 40px 0px;
    gap: 40px;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(1, 1fr);
    /* Config Layout of form */
    @media screen and (min-width: 320px) {
    }
    @media screen and (min-width: 750px) {
      grid-template-columns: repeat(2, 1fr);
      max-width: 692px;
      margin: 0 auto;
    }
    @media screen and (min-width: 1270px) {
      max-width: 1048px;
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: 1440px) {
      max-width: 1288px;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
export const PromoTitle = styled.div`
  color: red;
  background-color: blue;
  padding: 40px;
`
export const CardLayout = styled.div`
  padding: 14px 8px 8px 8px;
  border-radius: 10px;
  background-color: ${COLORS.violet_transparent_color};
  width: 280px;
  @media screen and (min-width: 450px) {
  width : 320px;
  }
  @media screen and (min-width: 600px) {
    width: 420px;  
  }
  @media screen and (min-width: 750px) {
    width: 320px;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`;
