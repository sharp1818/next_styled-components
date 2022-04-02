import styled from "styled-components";
import COLORS from "../../styles/colors.jsx";
//Layout --- ServicesBox
export const ServiceBoxLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  @media screen and (min-width: 920px) {
    grid-template-columns: 1fr 1fr;
    max-width: 740px;
    margin: auto;
  }
  @media screen and (min-width: 1080px) {
    max-width: 860px;
    margin: auto;
    grid-gap: 26px;
  }
  @media screen and (min-width: 1500px) {
    grid-template-columns: 1fr 1fr;
    max-width: 1220px;
    grid-gap: 30px;
    margin: auto;
  }
  section:first-child {
    max-width: 180px;
    position: relative;
    left: 20%;
    @media screen and (min-width: 320px) {
      max-width: 190px;
      left: 24%;
    }
    @media screen and (min-width: 400px) {
      max-width: 280px;
      left: 18%;
    }
    @media screen and (min-width: 500px) {
      max-width: 360px;
    }
    @media screen and (min-width: 620px) {
      left: 24%;
    }
    @media screen and (min-width: 730px) {
      max-width: 430px;
      left: 26%;
    }
    @media screen and (min-width: 820px) {
      left: 30%;
    }
    @media screen and (min-width: 920px) {
      left: 0;
    }
    @media screen and (min-width: 1500px) {
      max-width: 660px;
      position: relative;
    }
  }
  &:nth-child(2n + 1) {
    section:first-child {
      transform: scaleX(-1);
    }
    section:last-child {
      grid-row-start: 1;
      grid-row-end: 2;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      text-align: right;
      div:nth-child(1) {
        display: flex;
        flex-direction: row-reverse;
      }
      div:nth-child(4) {
        li {
          display: flex;
          flex-direction: row-reverse;
        }
      }
    }
  }
  &:nth-child(2n) {
    section:last-child {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;
export const WrapLeft = styled.section`
  position: relative;
  height: 100%;
`;
export const Background = styled.div`
  width: 100%;
  height: 100%;
  right: 44px;
  position: absolute;
  @media screen and (min-width: 320px) {
    right: 50px;
  }
  @media screen and (min-width: 400px) {
    right: 50px;
  }
  @media screen and (min-width: 500px) {
    right: 50px;
  }
  @media screen and (min-width: 730px) {
    right: 90px;
  }
  @media screen and (min-width: 1500px) {
    width: 100%;
    height: 100%;
    right: 105px;
    position: absolute;
  }
`;
export const ImageLayout = styled.div`
  position: relative;

  height: 100%;
  width: 100%;
  min-height: 250px;
  @media screen and (min-width: 320px) {
    min-height: 274px;
  }
  @media screen and (min-width: 400px) {
    min-height: 350px;
  }
  @media screen and (min-width: 500px) {
    min-height: 450px;
  }
  @media screen and (min-width: 730px) {
    min-height: 520px;
  }
  @media screen and (min-width: 1500px) {
    position: relative;
    height: 100%;
    width: 100%;
    min-height: 660px;
  }
`;
export const PrimaryImage = styled.div`
  width: 150px;
  position: absolute;
  pointer-events: none;
  right: 0;
  top: 0;
  @media screen and (min-width: 320px) {
    width: 165px;
  }
  @media screen and (min-width: 400px) {
    width: 210px;
  }
  @media screen and (min-width: 500px) {
    width: 280px;
  }
  @media screen and (min-width: 730px) {
    width: 324px;
  }
  @media screen and (min-width: 1500px) {
    width: 370px;
    position: absolute;
    right: 0;
    top: 0;
  }
`;
export const SecundaryImage = styled.div`
  width: 100px;
  position: absolute;
  pointer-events: none;
  bottom: 20px;
  @media screen and (min-width: 320px) {
    width: 125px;
    bottom: 14px;
  }
  @media screen and (min-width: 400px) {
    width: 145px;
    bottom: 30px;
  }
  @media screen and (min-width: 500px) {
    width: 180px;
    bottom: 40px;
  }
  @media screen and (min-width: 730px) {
    width: 210px;
    bottom: 40px;
  }
  @media screen and (min-width: 920px) {
  }
  @media screen and (min-width: 1500px) {
    width: 300px;
    position: absolute;
    bottom: 120px;
  }
`;
//Content --- ServicesBox
export const WrapRight = styled.section`
  padding: 0px 20px;
  @media screen and (min-width: 400px) {
    padding: 0px 30px;
  }
  @media screen and (min-width: 620px) {
    padding: 0px 40px;
  }
  @media screen and (min-width: 920px) {
    padding: 0px 0px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 30px;
  }
  @media screen and (min-width: 1500px) {
    font-size: 30px;
  }
`;
export const Title = styled.div`
  color: ${COLORS.pink_color3};
  font-weight: 500;
  display: flex;
  flex-direction: row;
  font-size: 22px;
  span {
    display: flex;
    align-items: center;
  }
  @media screen and (min-width: 620px) {
    font-size: 24px;
  }
  @media screen and (min-width: 920px) {
    font-size: 30px;
  }
`;
export const Name = styled.div`
  font-size: 24px;
  color: ${COLORS.pink_color2};
  font-weight: 300;
  padding: 0px 0px;
  @media screen and (min-width: 620px) {
    font-size: 26px;
  }
  @media screen and (min-width: 920px) {
    font-size: 36px;
  }
  @media screen and (min-width: 1500px) {
    font-size: 38px;
  }
`;
export const Description = styled.div`
  text-align: match-parent;
  padding: 8px 0px;
  font-size: 16px;
  font-weight: 300;
  color: ${COLORS.black_color};
  @media screen and (min-width: 620px) {
    font-size: 18px;
  }
  @media screen and (min-width: 920px) {
    padding: 14px 0px;
    font-size: 20px;
  }
  @media screen and (min-width: 1500px) {
    font-size: 22px;
  }
`;
export const List = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Option = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 2px 0px;
  font-size: 16px;
  font-weight: 300;
  color: ${COLORS.black_colo2};

  span:nth-child(1) {
    display: flex;
    align-items: center;
    color: ${COLORS.pink_color2};
  }
  @media screen and (min-width: 620px) {
    font-size: 18px;
  }
  @media screen and (min-width: 920px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1500px) {
    font-size: 22px;
  }
`;
export const ButtonOpenPrices = styled.div`
  font-size: 16px;
  font-weight: 600;
  border: 1px solid ${COLORS.pink_color3};
  background-color: ${COLORS.white_color2};
  color: ${COLORS.pink_color2};
  padding: 6px 14px;
  border-radius: 6px;
  letter-spacing: 4px;
  margin-top: 14px;
  cursor: pointer;
  @media screen and (min-width: 1500px) {
    font-size: 18px;
  }
`;
//Modal
export const ModalContainer = styled.div`
  z-index: 101;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  overflow-y: auto;
  opacity: 1;
  width: 100%;
  height: 100%;
  top: 0;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
`;
export const ProductsLayout = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 40px;

  @media screen and (min-width: 678px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1350px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
export const CloseButton = styled.div`
  margin-top: 24px;
  background-color: ${COLORS.pink_color};
  color: ${COLORS.black_color};
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.75rem;
  padding: 0.45rem 1.65rem;
  position: relative;
  text-align: center;
  max-width: 200px;
  cursor: pointer;
  transform: rotate(0deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  :focus {
    outline: 0;
  }
  :after {
    content: "";
    position: absolute;
    border: 1px solid ${COLORS.white_color};
    bottom: 4px;
    left: 4px;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
  }
  :hover:after {
    bottom: 2px;
    left: 2px;
  }
`;
//BoxCard
export const BoxCard = styled.div`
  background-color: #cecece;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 220px;
  max-width: 300px;
  padding-bottom: 10px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
`;
export const TitleCard = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  font-size: 20px;
  min-height: 80px;
  padding: 4px 20px;
`;
export const ImageFrame = styled.div`
  text-align: center;
  pointer-events: none;
`;
export const Price = styled.div`
  border: 1px solid #202020;
  font-size: 20px;
  margin-top: 10px;
  padding: 4px;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 20%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
`;
//Form
export const FormBox = styled.div`
  /* config select user */
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;
  /* config styles */
  background-color: ${COLORS.black_transparent_color};
  border-radius: 4px;
  padding: 20px 0px 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 290px;
  @media screen and (min-width: 480px) {
    width: 360px;
  }
  @media screen and (min-width: 720px) {
    width: 460px;
  }
  @media screen and (min-width: 1020px) {
    width: 560px;
  }
`;
export const FormTitle = styled.div`
  font-size: 40px;
  color: ${COLORS.white_color};
  padding-bottom: 4px;
  letter-spacing: 4px;
  text-transform: uppercase;
`;
export const FormLayout = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: ${COLORS.white_color};
  width: 230px;
  gap: 4px;
  @media screen and (min-width: 480px) {
    width: 300px;
  }
  @media screen and (min-width: 720px) {
    width: 340px;
  }
  @media screen and (min-width: 1020px) {
    width: 440px;
  }
`;
export const LabelBox = styled.label`
  padding-left: 8px;
  letter-spacing: 2px;
  color: ${COLORS.pink_color4};
  font-size: 16px;
  text-transform: uppercase;
  padding: 2px 8px;
  @media screen and (min-width: 480px) {
    font-size: 18px;
  }
`;
export const InputBox = styled.input`
  /* padding: 6px 8px; */
  padding: 0px 8px 0px 8px;
  height: 40px;
  border-radius: 10px;
  outline: none;
  border: none;
  background-color: ${COLORS.violet_transparent_color};
  color: ${COLORS.white_color};
  font-size: 14px;
`;
export const TextBox = styled.textarea`
  /* padding: 6px 8px; */
  height: 64px;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${COLORS.white_color};
  font-size: 14px;
  min-width: 100%;
  max-width: 100%;
`;
export const SelectBox = styled.select`
  /* padding: 6px 8px; */
  padding: 0px 8px 0px 8px;
  height: 40px;
  border-radius: 10px;
  outline: none;
  border: none;
  font-size: 14px;
  background-color: ${COLORS.violet_transparent_color};
  color: ${COLORS.white_color};
  option:checked {
    display: none;
  }
`;
export const AlertError = styled.div`
  font-size: 12px;
  padding: 0px 8px 0px 8px;
  color: ${COLORS.red_color};
`;
export const SendButton = styled.button`
  background-color: ${COLORS.pink_color4};
  padding: 6px 10px;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  min-width: 86px;
  margin: 10px auto 0px auto;
  border: 1px solid black;
  outline: none;
  border-radius: 8px;
  :hover {
    background-color: ${COLORS.pink_color3};
    color: ${COLORS.white_color};
  }
`;
