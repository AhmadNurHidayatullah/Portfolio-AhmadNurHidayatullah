import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>

        {/* Main Portfolio */}
        <Route
          path="/"
          element={
            <>
              <Navbar />

              <main>
                <Home />
              </main>

              <Footer />
            </>
          }
        />

        {/* Project Case Study */}
        <Route
          path="/projects/:id"
          element={<ProjectDetail />}
        />

      </Routes>

    </BrowserRouter>
  );
};

export default App;