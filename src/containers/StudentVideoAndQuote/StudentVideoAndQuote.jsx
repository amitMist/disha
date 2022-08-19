import React from "react";

import "./StudentVideoAndQuote.css";

import onlineProgram from "../../assets/onlineProgram.svg";
import USNews from "../../assets/USNews.svg";
import registrationDates from "../../assets/registrationDates.svg";
import quote from "../../assets/quote.svg";
import { Box, BoxText, Container } from "../../styles/global";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import useMediaQuery from "../../utils/useMediaQuery";

const StudentVideoAndQuote = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return (
    <Container>
      <Box width="700">
        <LiteYouTubeEmbed
          id="LxE7a6S-si4"
          title="YouTube Embed"
          playlist={false}
        />
      </Box>
      <Box>
        <img style={{ maxWidth: "89px" }} src={quote} alt="quote" />
        <BoxText
          fontWeight={"500"}
          fontStyle="italic"
          fontSize={isDesktop ? "24px" : "18px"}
          lineHeight={isDesktop ? "34px" : "25px"}
          letterSpacing="-0.05em"
          marginTop={isDesktop ? "32px" : "10px"}
        >
          I cannot express how happy I am that I chose UMBC to obtain my
          master's degree. I was very impressed with all of the courses and
          professors. I learned a great deal that directly correlates to my job
          and will benefit from it now and in the future.
        </BoxText>
        <BoxText
          fontWeight="700"
          fontSize="14px"
          lineHeight="22px"
          marginTop={isDesktop ? "32px" : "10px"}
        >
          - Online M.S. Alumni, Neha Jha ‘19
        </BoxText>
      </Box>
    </Container>
  );
};

export default StudentVideoAndQuote;
