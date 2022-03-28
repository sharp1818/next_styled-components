import styled from "styled-components";
import COLORS from "../../styles/colors.jsx";
//Styles for Nav
export const NavShadow = styled.header`
  /* box-shadow: 0px 1px 8px 0px rgb(224, 199, 210); */
  background-color: ${(props) =>
    props.background ? `${COLORS.navBar_background_color}` : `transparent`};
`;
export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px 30px;
  max-width: 1220px;
  margin: 0 auto;
`;
export const LogoMenuLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 920px) {
    flex-direction: row-reverse;
    gap: 16px;
  }
`;
export const LogoSvg = styled.div`
  @media screen and (max-width: 920px) {
    width: 72px;
    height: 60px;
  }
  @media screen and (max-width: 420px) {
    display: none;
  }
`;
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
export const DeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;
export const Info = styled.div`
  :nth-child(1) {
    color: ${COLORS.navBar_letter_color};
  }
  :nth-child(2) {
    font-size: 16px;
    font-weight: bold;
    color: ${COLORS.navBar_letter_color};
  }
  @media screen and (max-width: 920px) {
    display: none;
  }
`;
//Style for NavComponent
export const NavComponentLayout = styled.div`
  text-align: center;
  height: 100vh;
  font-size: 50px;
  font-weight: 400;
  color: ${COLORS.black_color};
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #e65c5c0f;
  /* background-image: url("../../images/navbar/1.png"); */
  .title {
    /* background-color: #e65c5c21; */
    /* background-color: #fcf5f22f; */
    padding: 200px 0px 40px 0px;
    @media screen and (min-width: 420px) {
      padding: 240px 0px 40px 0px;
    }
    @media screen and (min-width: 920px) {
      padding: 300px 0px 40px 0px;
    }
    @media screen and (min-width: 1500px) {
      padding: 320px 0px 40px 0px;
    }
  }
  .buttons-layout {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    @media screen and (min-width: 420px) {
    }
    @media screen and (min-width: 920px) {
      flex-direction: row;
      justify-content: center;
      gap: 20px;
    }
    @media screen and (min-width: 1500px) {
    }
  }
`;
export const ButtonLink = styled.a`
  font-size: 18px;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px 0px;
  width: 220px;
  letter-spacing: 2px;
`;
//Styles for NavMobile
export const ContainerMobileMenu = styled.div`
  background-color: ${COLORS.navBar_background_color};
  position: absolute;
  top: 0px;
  left: ${({ open }) => (open ? "0" : "-100%")}; //Import
  width: 100%;
  height: 100vh;
  transition: 0.5s all ease;
  padding-top: 140px;
`;
export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
export const OptionMenu = styled.div`
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${COLORS.navBar_letter_color};
`;

//Styles for NavDesktop
export const ContainerNavMenu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding-left: 80px;
`;
export const OptionNavMenu = styled.div`
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${(props) =>
    props.href === props.pathName
      ? `${COLORS.primary_color}`
      : `${COLORS.navBar_letter_color}`};
  cursor: pointer;
  :hover {
    color: ${COLORS.primary_color};
  }
`;
