import React, { useEffect, useState } from "react";

import "./DetailsRow.css";

import expandVector from "../../assets/expandVector.svg";
import onlineProgram from "../../assets/onlineProgram.svg";
import USNews from "../../assets/USNews.svg";
import registrationDates from "../../assets/registrationDates.svg";
import quote from "../../assets/quote.svg";
import {
  Container,
  Box,
  BoxTitle,
  BoxText,
  BoxBg,
  CollapseButton,
} from "../../styles/global";
import useCollapse from "react-collapsed";
import useMediaQuery from "../../utils/useMediaQuery";

function CollapseSection(props) {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const {
    getToggleProps,
    getCollapseProps,
    isExpanded,
    setExpanded,
  } = useCollapse();

  useEffect(() => {
    setExpanded(isDesktop);
  }, [setExpanded, isDesktop]);
  return (
    <div>
      <BoxTitle
        textAlign={isDesktop ? "center" : "left"}
        marginLeft={isDesktop ? "0px" : "10px"}
      >
        {props.title}{" "}
        {!isDesktop ? (
          <CollapseButton {...getToggleProps()}>
            {isExpanded ? "-" : "+"}
          </CollapseButton>
        ) : (
          <></>
        )}
      </BoxTitle>
      <section {...getCollapseProps()}>{props.children}</section>
    </div>
  );
}

const DetailsRow = () => {
  return (
    <Container>
      <Box>
        <CollapseSection key={"onlineProgram"} title={"Featured Program"}>
          <BoxBg>
            <BoxText
              fontWeight="700"
              fontSize="16px"
              lineHeight="19px"
              paddingTop="15px"
              marginBottom="15px"
            >
              Online M.S. in Information Systems
            </BoxText>
            <img 
              src={onlineProgram}
              alt="onlineProgram"
              style={{
                display: "block",
                marginRight: "auto",
                marginTop: "12px",
              }}
            />
            <BoxText
              paddingTop="12px"
              marginBottom="8px"
            >
              Turn data into solutions, and get the skills and career you want.
              Join the only public university in Maryland with a nationally
              ranked graduate online technology program.
            </BoxText>
            <BoxText
              paddingTop="8px"
              marginBottom="19px"
              fontWeight="700"
              fontSize="14px"
              lineHeight="17px"
            >
              More on Information Systems Degrees →
            </BoxText>
          </BoxBg>
        </CollapseSection>
      </Box>
      <Box>
        <CollapseSection key={"nationalRank"} title={"Nationally Ranked"}>
          <BoxBg>
            <img
              src={USNews}
              width="210px"
              height="190px"
              alt="USNews"
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                paddingTop: "35px",
              }}
            />
            <BoxText
              marginTop="27px"
              marginLeft="25px"
            >
              UMBC is ranked #7 nationally as an innovative university and #13
              in undergraduate teaching.
            </BoxText>
          </BoxBg>
        </CollapseSection>
      </Box>
      <Box>
        <CollapseSection key={"registrationDate"} title={"Registration Dates"}>
          <BoxBg
            paddingTop="33px"
          >
            <img src={registrationDates} alt="registrationDates" />
          </BoxBg>
        </CollapseSection>
      </Box>
    </Container>
  );
};

export default DetailsRow;
