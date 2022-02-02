import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import { Container } from "react-bootstrap";
import HeaderComponent from "./Components/HeaderComponent";
import Footer from "./Components/Footer";
import ProductPage from "./Pages/ProductPage";
import ErrorPage from "../src/Pages/ErrorPage";
function App() {
  return (
    // <main className="py-3">
    //   <HeaderComponent />
    //   <Container>
    //     <Homepage />
    //   </Container>
    // </main>

    <BrowserRouter>
      <HeaderComponent />
      <Container fluid className="mx-2">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/search/:keyword" element={<Homepage />} />
          <Route path="/category/:cat" element={<Homepage />} />
          <Route path="/sort/:sot" element={<Homepage />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>

    // <BrowserRouter>
    //   <HeaderComponent />
    //   <main className="py-3">
    //     <Container>
    //       <Routes>
    //         <Route link="/" component={Homepage} exact />
    //       </Routes>
    //     </Container>
    //   </main>
    //   <Footer />
    // </BrowserRouter>
  );
}

export default App;
