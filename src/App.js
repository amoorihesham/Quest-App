import { Fragment, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import FeaturesSection from "./components/features/FeaturesSection";
import GallarySection from "./components/gallary/GallarySection";
import ProgressSection from "./components/progress/ProgressSection";
import TestimonielsSection from "./components/testimoniels/TestimonielsSection";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";
import { Route, Routes } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <Fragment>
      {loading === true ? (
        <Loader />
      ) : (
        <Fragment>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Hero classList="heroSection py-5 bg-dark d-flex align-items-center justify-content-center text-center" />
              }
            />
            <Route
              path="/features"
              element={
                <FeaturesSection classList="featuresSection py-5 text-center bg-body-tertiary" />
              }
            />
            <Route
              path="/gallary"
              element={
                <GallarySection classList="gallarySection py-5 text-center bg-body-tertiary" />
              }
            />
            <Route
              path="/skills"
              element={
                <ProgressSection classList="progressSection py-5 text-center bg-body-tertiary" />
              }
            />
            <Route
              path="/testimoniels"
              element={
                <TestimonielsSection classList="testimonielsSection py-5 text-center bg-body-tertiary" />
              }
            />
            <Route
              path="/contact"
              element={
                <Contact classList="contact py-5 text-center bg-body-tertiary" />
              }
            />
          </Routes>
          {/*<Footer classList="footerSection py-3 text-center bg-dark" />*/}
        </Fragment>
      )}
    </Fragment>
  );
}

export default App;
