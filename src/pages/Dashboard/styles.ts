import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Wrapper = styled.div`
  background-color: ${colors.appBackground};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
