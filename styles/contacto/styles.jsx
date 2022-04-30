import styled from "styled-components";
import COLORS from "../colors";

export const Container = styled.div`
  /* config select USER */
  /* -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none; */
`;
// Layout Form and Info
export const LayoutForm = styled.div`
  background-color: ${COLORS.white_color};
  /* background-color: #0000ff18; */
  /* Config Jump To Form */
  border-top: 72px solid transparent;
  margin-top: -72px;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding;
  background-clip: padding-box;
  /* Config Grid Layout */
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  @media screen and (min-width: 420px) {
    border-top: 88px solid transparent;
    margin-top: -88px;
  }
  @media screen and (min-width: 920px) {
    border-top: 103px solid transparent;
    margin-top: -103px;
    grid-template-columns: 2fr 1fr;
  }
  @media screen and (min-width: 1320px) {
    grid-template-columns: 1.5fr 1fr;
  }
  .ContactFormLayout {
    display: flex;
    justify-content: center;
    padding-bottom: 40px;
    padding-top: 40px;
  }
  .ContactDataLayout {
    display: grid;
    grid-template-rows: 1fr 2fr;
    @media screen and (min-width: 560px) {
      grid-template-rows: 1fr 1fr;
    }
    @media screen and (min-width: 920px) {
      grid-template-rows: 1fr 2fr;
    }
    @media screen and (min-width: 1320px) {
      width: 436px;
    }
  }
`;
