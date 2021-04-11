import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Resume from "./components/pages/Resume";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
      </Switch>
      <Footer />
    </>
  );
}
