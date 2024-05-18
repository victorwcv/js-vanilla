import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useGlobalState } from "./context/StatusContext";
import Esfera13105 from "./pages/Esfera13105/Esfera13105";
import Esfera23105 from "./pages/Esfera23105/Esfera23105";
import Esfera3105 from "./pages/Esfera3105/Esfera3105";
import Home from "./pages/Home/Home";

const App = () => {
  const { globalState } = useGlobalState();
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/3105" element={<Esfera3105 />} />
          <Route path="/13105" element={<Esfera13105 />} />
          <Route path="/23105" element={<Esfera23105 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
