import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./component/Nav/Nav";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/PoPor" element={<Nav />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
