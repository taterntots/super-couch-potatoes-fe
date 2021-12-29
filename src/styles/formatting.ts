import { css } from "styled-components";

/* Helper to reset button styles
=============================================================== */

/** Used to reset any/all button styles */
export const buttonReset = css`
  appearance: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  outline: none;
  margin: 0;
  padding: 0;
`;

/* Helper that adds ellipsis to text if it extends past its parent container
=============================================================== */

/** When text is too large for its parent it will cut it off and add a ellipsis */
export const ellipsisText = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
