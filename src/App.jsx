import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/character/:characterId" element={<></>}/>
    </Routes>
  );
}
export default App;