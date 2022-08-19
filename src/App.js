import React from "react";

import { DetailsRow, StudentVideoAndQuote, Footer, Header } from "./containers";
import { HeaderAndNavbar, UtilityAndSearchBar } from "./components";
import styled from 'styled-components';

import "./App.css";
import Global from "./styles/global"

const App = () => {
  return (
    <>
    <Global />
    <UtilityAndSearchBar />
    <HeaderAndNavbar />
    <DetailsRow />
    <StudentVideoAndQuote />
    </>

    
  );
};

export default App;
