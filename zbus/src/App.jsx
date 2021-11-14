import { Route, Routes, Redirect } from "react-router-dom";
import { LoginRegister } from "./pages/LoginRegister";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginRegister />}></Route>
    </Routes>
  );
}

export default App;
