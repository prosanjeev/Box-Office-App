import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./Pages/Home";
import Show from "./Pages/Show";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout/>} >
        <Route index element={<Home/>} />
        
        </Route>
        <Route path="/show/:ShowId" element={<Show/>} />
        <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
