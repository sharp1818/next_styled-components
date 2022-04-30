import styled from "styled-components";
import COLORS from "../colors";
//PromosLayout
export const PromoBox = styled.div`
  /* config user select */
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none; 
  user-select: none;
  /* config jump to servicebox */
  border-top: 72px solid transparent;
  margin-top: -72px;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding;
  background-clip: padding-box;
  @media screen and (min-width: 420px) {
    border-top: 88px solid transparent;
    margin-top: -88px;
  }
  @media screen and (min-width: 920px) {
    border-top: 103px solid transparent;
    margin-top: -103px;
  }
  @media screen and (min-width: 1020px) {

  }
`;
