import styled from 'styled-components';
import COLORS from '../../styles/colors.jsx' 

export const FooterLayout = styled.footer`
    display: flex;
    flex-direction: column;
    background-color: ${COLORS.footer_background_color};
    position: relative;
    bottom:0;
    width:100%;
`;
export const ContactLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 960px){
        grid-template-columns: repeat(1, 1fr);
    }
`
export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    color: ${COLORS.white_color};
    gap: 14px;
    font-size: 18px;
    padding: 100px 10%;
    @media screen and (max-width: 630px){
        gap: 10px;
    }
    a{
      display: flex;
      flex-direction: column;
      span{
      display: flex;
      align-items: center;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 20px;
      color: ${COLORS.pink_color};
      gap: 4px;
        /* :hover{color:${COLORS.footer_hover_color}}
        svg{
            :hover{color:${COLORS.footer_hover_color}}
        } */
      }
    }:nth-child(1){
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("../../images/footer/1.jpg");
    }
`;
export const ButtonPromo = styled.div`
    padding: 14px;
    width: fit-content;
    letter-spacing: 4px;
    background-color: ${COLORS.pink_color};
    cursor: pointer;
`
export const ContactTitle = styled.div`
    font-size: 40px;
    color: ${COLORS.white_color};
    padding-bottom: 4px;
    letter-spacing: 4px;
    text-transform: uppercase;
`;
export const FollowIcons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 6px;
    padding: 0px 0px 4px 0px;
`;
export const Copyright = styled.div`
    color: ${COLORS.white_color};
    font-size: 12px;
    text-align: center;
    background-color: ${COLORS.copyright_background_color};
    padding: 14px 0px;
    @media screen and (max-width: 370px){
        display: flex;
        flex-direction: column;
    }
`;