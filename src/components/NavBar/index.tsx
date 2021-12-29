import { useNavigate } from "react-router-dom";
import * as Styled from "./styles";

// ----------------------------------------------------------------------------------
// ------------------------------------ Nav Bar -------------------------------------
// ----------------------------------------------------------------------------------

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Styled.NavBar>
      <Styled.NavButton onClick={() => navigate("/games")}>
        Games
      </Styled.NavButton>
      <Styled.NavButton onClick={() => navigate("/movies")}>
        Movies
      </Styled.NavButton>
      <Styled.NavButton onClick={() => navigate("/shows")}>
        Shows
      </Styled.NavButton>
      <Styled.NavButton onClick={() => navigate("/books")}>
        Books
      </Styled.NavButton>
    </Styled.NavBar>
  );
};
