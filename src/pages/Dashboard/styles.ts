import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Wrapper = styled.div`
  background-color: ${colors.appBackground};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const MonthContainer = styled.div`
  width: 80%;
`;

export const MonthText = styled.h3`
  text-align: center;
`;
