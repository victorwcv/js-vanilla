import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useGlobalState } from "./context/StatusContext";

import Home from "./pages/Home/Home";
import Esferas from "./pages/Esferas/Esferas";
import Condensadores from "./pages/Condensadores/Condensadores";

const App = () => {
  const { globalState } = useGlobalState();
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/esferas" element={<Esferas />} />
          <Route path="/condensadores" element={<Condensadores />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
