import * as Styled from "./styles";

// ----------------------------------------------------------------------------------
// ------------------------------------ Nav Bar -------------------------------------
// ----------------------------------------------------------------------------------

export const NavBar = () => {
  return (
    <Styled.NavBar>
      <Styled.NavButton>Games</Styled.NavButton>
      <Styled.NavButton>Movies</Styled.NavButton>
      <Styled.NavButton>Shows</Styled.NavButton>
      <Styled.NavButton>Books</Styled.NavButton>
    </Styled.NavBar>
  );
};
