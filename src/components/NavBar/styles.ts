import styled from "styled-components";
import { colors, buttonReset } from "../../styles";

export const NavBar = styled.div`
  background-color: ${colors.black};
  display: flex;
  justify-content: space-evenly;
`;

export const NavButton = styled.button`
  ${buttonReset};
  padding: 12px 20px;
`;
