import styled from "styled-components";
import { colors } from "./styles";

export const Wrapper = styled.div`
  background-color: ${colors.appBackground};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  color: white;
`;
