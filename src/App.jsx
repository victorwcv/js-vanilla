import { useGlobalState } from "./context/StatusContext"
import Esfera13105 from "./pages/Esfera13105/Esfera13105"
import Esfera23105 from "./pages/Esfera23105/Esfera23105"
import Esfera3105 from "./pages/Esfera3105/Esfera3105"

const App = () => {
  const {globalState} = useGlobalState();
  return (
    <div>
      <h1>{globalState.saludo}</h1>
      <Esfera3105 />
      <Esfera13105 />
      <Esfera23105 />
    </div>
  )
}

export default App