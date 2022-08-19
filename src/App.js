import React from "react";

import { VideoBGAndForm, DetailsRow, StudentVideoAndQuote, Footer } from "./containers";
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
    <VideoBGAndForm />
    <DetailsRow />
    <StudentVideoAndQuote />
    <Footer/>
    </>

    
  );
};

export default App;
