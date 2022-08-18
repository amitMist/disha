import React from 'react';

import './header.css';

const  Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h1>Earn a degree or certificate online  with a schedule that works for you.</h1>
        <p>Study anywhere with online courses and no-cost digital course materials.</p>
        <div className="header-content_input">
          <button type="button">Apply</button>
        </div>
      </div>
      <div className="header-queryBox">
          <h1>Get your questions answered</h1>
          <form action="/submit_page.php">
            <div className="header-queryBox_form">
              <p>What degree level are you interested in pursuing?</p>
              <div className="header-queryBox_radiobutton">
                <input type="radio" id="bachelors-degree" name="interested_degree" value="Bachelor&apos;s Degree" />
                  <label for="bachelors">Bachelor&apos;s Degree</label><br/>
                <input type="radio" id="masters-degree" name="interested_degree" value="Master&apos;s Degree" />
                  <label for="masters">Master&apos;s Degree</label><br/>
                <input type="radio" id="certificate" name="interested_degree" value="Certificate" />
                  <label for="certificate">Certificate</label>
              </div>
              <div className="header-queryBox_namefield"> 
                <div className="header-queryBox_namefield-fname">
                  <label for="fname">First name</label><br/>
                    <input type="text" id="fname" name="fname" value="" />
                </div>
                <div className="header-queryBox_namefield-lname">
                  <label for="lname">Last name</label><br/>
                    <input type="text" id="lname" name="lname" value="" />
                </div>
              </div>
              <div className="header-queryBox_emailfield">
                <label for="email">Email address</label><br/>
                  <input type="text" id="email" name="email" value="" />
              </div>
              <div className="header-queryBox_zipcodefield">
                <div>
                  <label for="zip">Zip code</label><br/>
                    <input type="text" id="zip" name="zip" value="" />
                </div>
                <div className="header-queryBox_zipcodefield-submit">
                  <input type="submit" value="Submit" />
                </div> 
            </div>
            </div>
          </form>
          <p>We value your privacy and will never share this information without your consent.</p>
      </div>
    </div>
  )
}


export default Header