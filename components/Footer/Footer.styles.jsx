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
    color: #ffffff;
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
      letter-spacing: 1px;
      font-size: 20px;
      color: #cc6565;
      gap: 4px;
        :hover{color:${COLORS.footer_hover_color}}
        svg{
            :hover{color:${COLORS.footer_hover_color}}
        }
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
    background-color: #cc6565;
    cursor: pointer;
`
export const ContactTitle = styled.div`
    font-size: 34px;
    color: #fff;
    padding-bottom: 4px;
    letter-spacing: 2px;
    text-transform: uppercase;
`;
export const FollowIcons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 12px;
    padding: 0px 0px 4px 0px;
`;
export const Copyright = styled.div`
    color: #f1f1f1;
    font-size: 12px;
    text-align: center;
    background-color: #171717;
    padding: 14px 0px;
    @media screen and (max-width: 370px){
        display: flex;
        flex-direction: column;
    }
`;