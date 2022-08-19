import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';
import px2vw from "../utils/px2vw";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
      font-size: ${px2vw(24)};

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }
`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;
  height: ${props => props.height? props.height: "auto"};
  align-items: ${props => props.alignItems? props.alignItems: "normal"};

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Box = styled.div`
  display: flex;
  width: ${props => props.width ? px2vw(props.width, 350): px2vw(350, 350)};

  flex-direction: column;
  margin: ${px2vw(20)};
  background-color: ${props => props.bgColor};
  height: 100%;
  max-height: 380px;

  @media (min-width: 768px) {
    width: ${px2vw(350, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    height: 100%;
  }
`;

export const BoxBg = styled.div`
  padding-left: ${px2vw(25)};
  padding-right: ${px2vw(25)};
  min-height: 321px;
  background-color: #EAEAEA;
  margin-top: ${(props) => props.marginTop? props.marginTop: "0px" };
  margin-left: ${(props) => props.marginLeft? props.marginLeft: "0px" };
  margin-right: ${(props) => props.marginRight? props.marginRight: "0px" };
  padding-top: ${(props) => props.paddingTop? props.paddingTop: "0px" };
`;

export default Global;

export const BoxTitle = styled.p`
  color: #FFFFFF;
  font-family: var(--font-family);
  font-style: normal;
  font-size: 26px;
  text-align: ${(props) => (props.textAlign ? props.textAlign : "center")};
  font-weight: bold;
  background-color: #007176;
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 15px;
  padding-bottom: 15px;

  @media (max-width: 768px) {
    text-align: left;
  }
  
`;

export const BoxText = styled.p`
  color: ${(props) => (props.color ? props.color : "#000000")};
  font-family: var(--font-family);
  font-style:${(props) => props.fontStyle? props.fontStyle: "normal" };
  font-weight: ${(props) => props.fontWeight? props.fontWeight: "400" };
  font-size: ${(props) => props.fontSize? props.fontSize: "12px" };
  line-height: ${(props) => props.lineHeight? props.lineHeight: "15px" };
  margin-top: ${(props) => props.marginTop? props.marginTop: "0px" };
  margin-bottom: ${(props) => props.marginBottom? props.marginBottom: "0px" };
  margin-left: ${(props) => props.marginLeft? props.marginLeft: "0px" };
  padding-top: ${(props) => props.paddingTop? props.paddingTop: "0px" };
  letter-spacing: ${(props) => props.letterSpacing? props.letterSpacing: "normal" };
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
  width: ${props => props.width ? props.width : "inherit"};

`;

export const CollapseButton = styled.button`
  width: 18px;
  height: 31px;
  float: right;
  color: var(--color-umbcTheme);
  font-family: var(--font-family);
  font-weight: bold;
  font-size: 26px;
  line-height: 31px; 
  background: none;
  border: none;
  margin-right: 10px;
`;