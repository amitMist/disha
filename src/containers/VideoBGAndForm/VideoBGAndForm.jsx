import React from 'react';

import './VideoBGAndForm.css';
import bgImage from "../../assets/Video-BG-w-Overlay.png";
import { Box, BoxText, Container } from "../../styles/global";
import useMediaQuery from "../../utils/useMediaQuery";

const  VideoBGAndForm = () => {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  

  const getApplyBox=()=>{
    return (
      <div className="header-content" style={{ flexGrow: 5 }}>
        <BoxText
          fontWeight="700"
          fontSize="36px"
          lineHeight="40px"
          marginTop="1vw"
          color="#FFFFFF"
        >
          Earn a degree or certificate online with a schedule that works for
            you.
        </BoxText>
        <BoxText
          fontWeight="500"
          fontSize="24px"
          lineHeight="29px"
          marginTop="2vw"
          color="#FFFFFF"
          
        >
          Study anywhere with online courses and no-cost digital course
            materials.
        </BoxText>
          <div className="header-content_input">
            <button type="button">Apply</button>
          </div>
        </div>
    );
  }

  const getSubmitForm = () => {
    return (
      <div className="header-queryBox" style={{ flexGrow: 3 }}>
        <BoxText
          fontWeight="700"
          fontSize="20px"
          lineHeight="24px"
          textAlign="center"
          width="100%"
          marginTop="1vw"
        >
          GET YOUR QUESTIONS ANSWERED
        </BoxText>
        <BoxText
          fontWeight="600"
          fontSize="14px"
          lineHeight="17px"
          textAlign="center"
          width="100%"
          marginTop="1vw"
        >
          What degree level are you interested in pursuing?
        </BoxText>
        <form action="#" style={{ width: "100%" }}>
          <div className="header-queryBox_form">
            <Container style={{ flexDirection: "column" }}>
              <div className="header-queryBox_radiobutton">
                <input
                  type="radio"
                  id="bachelors-degree"
                  name="interested_degree"
                  value="Bachelor's Degree"
                />
                <label>Bachelor&apos;s Degree</label>
                <br />
                <input
                  type="radio"
                  id="masters-degree"
                  name="interested_degree"
                  value="Master's Degree"
                />
                <label>Master&apos;s Degree</label>
                <br />
                <input
                  type="radio"
                  id="certificate"
                  name="interested_degree"
                  value="Certificate"
                />
                <label>Certificate</label>
              </div>
            </Container>

            <Container>
              <div
                className="header-queryBox_field"
                style={{ marginRight: "10px" }}
              >
                First name
                <input type="text" id="fname" name="fname" />
              </div>
              <div
                className="header-queryBox_field"
                style={{ marginLeft: "10px" }}
              >
                Last name
                <input type="text" id="lname" name="lname" />
              </div>
            </Container>
            <Container>
              <div className="header-queryBox_field">
                Email address
                <input type="text" id="email" name="email" />
              </div>
            </Container>

            <Container alignItems="end">
              <div
                className="header-queryBox_field"
                style={{ marginRight: "10px" }}
              >
                Zip code
                <input type="text" id="zip" name="zip" />
              </div>
              <div
                className="header-queryBox_submit"
                style={{ marginLeft: "10px" }}
              >
                <input type="submit" value="Submit" />
              </div>
            </Container>
          </div>
        </form>
        <BoxText
          fontWeight="500"
          fontSize="9px"
          lineHeight="11px"
          textAlign="center"
          width="100%"
          letterSpacing="-0.02em"
        >
          We value your privacy and will never share this information without
          your consent.
        </BoxText>
      </div>
    );
  };
  const getDesktopTop=()=>{
   return  (<div className="header">
            {
              getApplyBox()
            }
            {
              getSubmitForm()
            }
  
          </div>)
  }

  const getMobileTop=()=>{
    return  (<>
      <div className="header">
        {
          getApplyBox()
        }
        
      </div>
       {getSubmitForm()}
      </>)
   }

  return (
    <Container>
      {
        isDesktop? getDesktopTop(): getMobileTop()
             
      }     
      

    </Container>
  );
}


export default VideoBGAndForm;