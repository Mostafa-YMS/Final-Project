import { Route, Routes, Redirect } from "react-router-dom";
import { Home } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
