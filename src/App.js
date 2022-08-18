import React from "react";

import { DetailsRow, Footer, Header, Test } from "./containers";
import { Article, Brand, CTA, Feature, Navbar, Utilitybar } from "./components";
import styled from 'styled-components';

import "./App.css";
import Global from "./styles/global"
import VideoRow from "./containers/VideoRow/VideoRow";

const App = () => {
  return (
    <>
    <Global/>
    <DetailsRow/>
    <VideoRow/>
    </>

    
  );
};

export default App;
