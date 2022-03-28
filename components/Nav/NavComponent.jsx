import React from "react";
import { NavComponentLayout, ButtonLink } from "./Nav.styles";

const NavComponent = (props) => {
  const {
    page_title,
    id_1 = "",
    id_2 = "",
    title_id_1 = "",
    title_id_2 = "",
  } = props;
  return (
    <>
      <NavComponentLayout>
        <div className="title">{page_title}</div>
        <div className="buttons-layout">
          {id_1 === "" || title_id_1 === "" ? (
            ""
          ) : (
            <ButtonLink href={id_1}>{title_id_1}</ButtonLink>
          )}
          {id_2 === "" || title_id_2 === "" ? (
            ""
          ) : (
            <ButtonLink href={id_2}>{title_id_2}</ButtonLink>
          )}
        </div>
      </NavComponentLayout>
    </>
  );
};

export default NavComponent;
