import { Route, Routes, Redirect } from "react-router-dom";
import { Login, Register, Home } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
