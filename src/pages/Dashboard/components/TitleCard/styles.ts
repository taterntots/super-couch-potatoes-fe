import styled from "styled-components";
import { colors } from "../../../../styles";

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
  padding-right: 20px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
`;
