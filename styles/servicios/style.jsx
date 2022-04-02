import styled from "styled-components";
import COLORS from "../colors";
//FORM
export const FormBox = styled.div`
  /* Config Layout of form */
  display: flex;
  justify-content: center;
  /* Config to link book service */
  border-top: 72px solid transparent;
  margin-top: -72px;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding;
  background-clip: padding-box;
  /* Config Background-Image */
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  background-image: url("../../images/servicios/background-form/1.png");
  background-color: ${COLORS.green_black};
  padding: 40px 0px;
  @media screen and (min-width: 420px) {
    border-top: 88px solid transparent;
    margin-top: -88px;
  }
  @media screen and (min-width: 920px) {
    border-top: 103px solid transparent;
    margin-top: -103px;
  }
  @media screen and (min-width: 1020px) {
    padding: 80px 0px;
  }
`;
// Config jump to ServiceBox
export const ServiceBox = styled.div`
  /* config user select */
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;
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
    padding: 80px 0px;
  }
`;
