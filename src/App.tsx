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
        <Route path="/games" element={<Dashboard />} />
        <Route path="/movies" element={<Dashboard />} />
        <Route path="/shows" element={<Dashboard />} />
        <Route path="/books" element={<Dashboard />} />
      </Routes>
    </Styled.Wrapper>
  );
};
