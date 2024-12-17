import Carrousel from "./components/layouts/carrousel/carrousel";
import Navbar from "./components/ui/navbar/navbar";
import BookDetails from "./pages/book-details";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Carrousel />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/book-details/:id" element={<BookDetails/>}/>
      </Routes>
    </>
  );
}

export default App;
