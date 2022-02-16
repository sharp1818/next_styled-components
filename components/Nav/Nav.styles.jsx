import styled from 'styled-components';
//Styles for Nav
export const NavShadow = styled.header`
    box-shadow: 0px 1px 10px 0px rgb(144,207,212);
`
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
    @media screen and (max-width: 920px){
        flex-direction: row-reverse;
        gap: 26px;
    }
`
export const ContactContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`
export const DeliveryContainer =styled.div`
    display: flex;
    flex-direction: column;
    font-size: 14px;
`
export const Info = styled.div`
    :nth-child(1){
        color: rgb(144,207,212);
    }
    :nth-child(2){
        font-size: 16px;
        font-weight: bold;
        color: rgb(27,64,73);
    }
    @media screen and (max-width: 920px){
        display: none;
    }
`
//Styles for NavMobile
export const ContainerMobileMenu = styled.div`
    background-color: rgb(144 207 212);
    position: absolute;
    top: 0px;
    left: ${({ open }) => (open ? "0" : "-100%")}; //Import
    width: 100%;
    height: 100vh;
    transition: 0.5s all ease;
    padding-top: 140px;
`
export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`
export const OptionMenu = styled.div`
    font-size: 20px;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 5px;
`
export const ButtonCloseMenu = styled.div`
    font-size: 20px;
    color: #292929;
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    position: absolute;
    bottom: 30px;
`
//Styles for NavDesktop
export const ContainerNavMenu = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
    padding-left: 80px;
`
export const OptionNavMenu = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #134653;
    cursor: pointer;
`