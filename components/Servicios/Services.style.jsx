import styled from 'styled-components';
import COLORS from '../../styles/colors.jsx' 
//Layout
export const ServiceBoxLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    @media screen and (min-width: 920px){
        grid-template-columns: 1fr 1fr;
        max-width: 740px;
        margin: auto;
    }
    @media screen and (min-width: 1080px){
        max-width: 860px;
        margin: auto;
        grid-gap: 26px;
    }
    @media screen and (min-width: 1500px){
        grid-template-columns: 1fr 1fr;
        max-width: 1220px;
        grid-gap: 30px;
        margin: auto;
    }
    section:first-child{
        max-width: 200px;
        position: relative;
        left: 16%;
            @media screen and (min-width: 320px){
            max-width: 220px;
            }
            @media screen and (min-width: 400px){
            max-width: 280px;
            left: 18%
            }
            @media screen and (min-width: 500px){
            max-width: 360px;
            }
            @media screen and (min-width: 620px){
            left: 24%;
            }
            @media screen and (min-width: 730px){
            max-width: 430px;
            left: 26%;
            }
            @media screen and (min-width: 820px){
            left: 30%;
            }
            @media screen and (min-width: 920px){
            left: 0;
            }
            @media screen and (min-width: 1500px){
                max-width: 660px;
                position: relative;
            }
    }
    &:nth-child(2n+1){
        section:first-child{
        transform: scaleX(-1);
        }
        section:last-child{
            grid-row-start: 1;
            grid-row-end: 2;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            text-align: right;
            div:nth-child(1){
                display: flex;
                flex-direction: row-reverse;
            }
            div:nth-child(4){
                li{
                    display: flex;
                    flex-direction: row-reverse;
                }
            }
        }
    }
    &:nth-child(2n){
        section:last-child{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
    }
`
export const WrapLeft = styled.section`
    position: relative;
    height: 100%;
`
export const Background = styled.div`
    width: 100%;
    height: 100%;
    right: 44px;
    position: absolute;
    @media screen and (min-width: 320px){
        right: 50px;
    }
    @media screen and (min-width: 400px){
        right: 50px; 
    }
    @media screen and (min-width: 500px){
        right: 50px; 
    }
    @media screen and (min-width: 730px){
        right: 90px;
    }
    @media screen and (min-width: 1500px){
        width: 100%;
        height: 100%;
        right: 105px;
        position: absolute;
    }
`
export const ImageLayout = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    min-height: 250px; 
    @media screen and (min-width: 320px){
        min-height: 274px;  
    }
    @media screen and (min-width: 400px){
        min-height: 350px;     
    }
    @media screen and (min-width: 500px){
        min-height: 450px;
    }
    @media screen and (min-width: 730px){
        min-height: 520px;
    }
    @media screen and (min-width: 1500px){
        position: relative;
        height: 100%;
        width: 100%;
        min-height: 660px;  
    }
`
export const PrimaryImage = styled.div`
    width: 150px;
    position: absolute;
    right: 0;
    top: 0;
    @media screen and (min-width: 320px){
        width: 165px;
    }
    @media screen and (min-width: 400px){
        width: 210px;
    }
    @media screen and (min-width: 500px){
        width: 280px;
    }
    @media screen and (min-width: 730px){
        width: 324px;
    }
    @media screen and (min-width: 1500px){
        width: 370px;
        position: absolute;
        right: 0;
        top: 0;
    }
`
export const SecundaryImage = styled.div`
    width: 100px;
    position: absolute;
    bottom: 20px;
    @media screen and (min-width: 320px){
        width: 125px;
        bottom: 14px;
    }
    @media screen and (min-width: 400px){
        width: 145px;
        bottom: 30px; 
    }
    @media screen and (min-width: 500px){
        width: 180px;
        bottom: 40px;
    }
    @media screen and (min-width: 730px){
        width: 210px;
        bottom: 40px;
    }
    @media screen and (min-width: 920px){
        
    }
    @media screen and (min-width: 1500px){
        width: 300px;
        position: absolute;
        bottom: 120px;
    }
`
//Content 
export const WrapRight = styled.section`
    padding: 0px 10px;
    @media screen and (min-width: 400px){
        padding: 0px 20px;
    }
    @media screen and (min-width: 620px){
        padding: 0px 40px;
    }
    @media screen and (min-width: 920px){
        padding: 0px 0px;
    }
    @media screen and (min-width: 1200px){
        font-size: 30px;
    }
    @media screen and (min-width: 1500px){
        font-size: 30px;
    }
`
export const Title = styled.div`
    color: ${COLORS.primary_color};
    display: flex;
    flex-direction: row;
    font-size: 22px;
    span{
        display: flex;
        align-items: center;
    }
    @media screen and (min-width: 620px){
       font-size: 24px;
    }
    @media screen and (min-width: 920px){
        font-size: 30px;
    }
`
export const Name = styled.div`
    font-size: 24px;
    color: #111111;
    font-weight: 400;
    padding: 4px 0px;
    @media screen and (min-width: 620px){
       font-size: 26px;
    }
    @media screen and (min-width: 920px){
        font-size: 36px;
    }
    @media screen and (min-width: 1500px){
        font-size: 38px;
    }
`
export const Description = styled.div`
    text-align: match-parent;
    padding: 14px 0px;
    font-size: 16px;
    font-weight: 500;
    color: ${COLORS.black_color2};
    @media screen and (min-width: 620px){
       font-size: 18px;
    }
    @media screen and (min-width: 920px){
        font-size: 20px;
    }
    @media screen and (min-width: 1500px){
        font-size: 22px;
    }
`
export const List = styled.div`
    display: flex;
    flex-direction: column;
`
export const Option = styled.li`
    list-style: none;
    display: flex;
    flex-direction: row;
    padding: 2px 0px;
    font-size: 16px;
    font-weight: 500;
    color: ${COLORS.black_color2};
    
    span:nth-child(1){
        display: flex;
        align-items: center;
        color: ${COLORS.primary_color};
    }
    @media screen and (min-width: 620px){
       font-size: 18px;
    }
    @media screen and (min-width: 920px){
        font-size: 20px;
    }
    @media screen and (min-width: 1500px){
        font-size: 22px;
    }
`