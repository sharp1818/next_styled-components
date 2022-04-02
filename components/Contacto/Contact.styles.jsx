import styled from "styled-components";
import COLORS from "../../styles/colors.jsx";


// Config Form
export const TextBoxContainer = styled.div`
  padding: 14px 8px 8px 8px;
  border-radius: 10px;
  background-color: ${COLORS.violet_transparent_color};
`;
//config GiftCardLayout
export const GiftCardLayout = styled.div`
  padding: 40px;
  background-color: ${COLORS.violet_transparent_color};
  @media screen and (min-width: 440px) {
    padding: 40px 80px;
  }
  @media screen and (min-width: 560px) {
    padding: 40px 120px;
  }
  @media screen and (min-width: 920px) {
    padding: 40px;
  }
`;
export const ButtonLink = styled.div`
  padding: 4px 0px;
  /* config styles */
  background-color: ${COLORS.black_transparent_color};
  color: ${COLORS.white_color};
  display: flex;
  width: 190px;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 40px;
  margin: 8px 0px 0px 0px;
  justify-content: center;
  cursor: pointer;
  :hover {
    color: ${COLORS.pink_color3};
  }
`;
//Layout Contact Data and Colors
export const LayoutData = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  background-color: ${COLORS.pink_color3};
  padding: 40px;
  gap: 40px;
  @media screen and (min-width: 440px) {
    padding: 40px 80px;
  }
  @media screen and (min-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 40px;
  }
  @media screen and (min-width: 920px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const DataBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TitleBox = styled.div`
  color: ${COLORS.black_color2};
  font-size: 20px;
  height: 30px;
  text-transform: uppercase;
  gap: 4px;
  letter-spacing: 2px;
  display: flex;
  flex-direction: row;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;
`;
export const Data = styled.div`
  color: ${COLORS.white_color};
  font-size: 16px;
  text-transform: uppercase;
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;
  
`;
export const Ubication = styled.div`
  color: ${COLORS.white_color};
  font-size: 16px;
  text-transform: uppercase;
`;
//Config Map
export const MapContainer = styled.div`
  .gmnoprint {
    display: none;
  }
`;
