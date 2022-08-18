import React from 'react';
 
import './VideoRow.css';

import onlineProgram from '../../assets/onlineProgram.svg';
import USNews from '../../assets/USNews.svg';
import registrationDates from '../../assets/registrationDates.svg';
import quote from '../../assets/quote.svg';
import { Box, Container } from '../../styles/global';
 
const VideoRow = () =>{
 return(
  <Container>
    <Box>
    <iframe width="700" height="393" src="https://www.youtube.com/embed/LxE7a6S-si4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Box>
    <Box>
    <div className="studentVideo-container_quote-img">
            <img src={ quote } alt="quote" />
          </div>
          <div className="studentVideo-container_quote-body">
            <p>I cannot express how happy I am that I chose UMBC to obtain my master's degree. I was very impressed with all of the courses and professors. I learned a great deal that directly correlates to my job and will benefit from it now and in the future.</p>
            <p>- Online M.S. Alumni, Neha Jha ‘19</p>
          </div>
    </Box>
  </Container>
 ) 
}
 
export default VideoRow