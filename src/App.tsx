// ROUTING
import { Route, Routes } from "react-router-dom";
import * as Styled from "./AppStyles";

// COMPONENTS
import { NavBar } from "./components";
import { Dashboard } from "./pages";

// ----------------------------------------------------------------------------------
// ----------------------------------- APP ------------------------------------------
// ----------------------------------------------------------------------------------

export const App = () => {
  return (
    <Styled.Wrapper>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Styled.Wrapper>
  );
};
