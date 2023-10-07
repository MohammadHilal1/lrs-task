import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <main className="main-container">
        <div className="content-wrapper">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/aboutUs">
              <AboutUs />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
