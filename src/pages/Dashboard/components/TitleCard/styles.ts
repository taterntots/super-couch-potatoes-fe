import styled from "styled-components";
import { colors, ellipsisText } from "../../../../styles";

export const Wrapper = styled.div`
  background-color: ${colors.grey[700]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${colors.grey[200]};
  border-radius: 10px;
  padding-left: 20px;
  margin-bottom: -1px;
`;

export const CardText = styled.p`
  ${ellipsisText}
  padding-right: 20px;
  width: 100%;
  margin: 0;
`;
