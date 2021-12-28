// ROUTING
import { Route, Routes } from "react-router-dom";

// COMPONENTS
import { Dashboard } from "./pages";

// ----------------------------------------------------------------------------------
// ----------------------------------- APP ------------------------------------------
// ----------------------------------------------------------------------------------

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};
