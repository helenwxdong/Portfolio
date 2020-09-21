import React, { Component } from "react";
import Main from "./components/Main";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavMain from "./components/NavMain";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import MediaQuery from "react-responsive";
import { useMediaQuery } from "react-responsive";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavMain />
        <Main />
        <Experience />
        <Projects />
        <About />
      </div>
    );
  }
}
