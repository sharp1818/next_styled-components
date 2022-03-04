import styled from 'styled-components';
import COLORS from '../../styles/colors.jsx' 

export const FooterLayout = styled.footer`
    display: flex;
    flex-direction: column;
    background-color: ${COLORS.footer_background_color};
    padding-top: 8px;
`;
export const ContactInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    font-size: 14px;
    color: #202020;
    gap: 10px;
    @media screen and (max-width: 630px){
        flex-direction: column;
        align-items: center;
        gap: 4px;
    }
    a{
      display: flex;
      align-items: center;
      :hover{color:${COLORS.footer_hover_color}}
      svg{
        :hover{color:${COLORS.footer_hover_color}}
      }
    }
`;
export const FollowIcons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    padding: 8px 0px;
`;
export const Copyright = styled.div`
    color: #f1f1f1;
    font-size: 12px;
    text-align: center;
    background-color: #202020;
    padding: 8px 0px;
    @media screen and (max-width: 370px){
        display: flex;
        flex-direction: column;
    }
`;