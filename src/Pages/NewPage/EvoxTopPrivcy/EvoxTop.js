import React from 'react'
import './EvoxTop.css'
import DefultTerms from '../DefultTerms'
import Navbar from '../../componets/NavBar/Navbar'
import { IsolationMode } from '../../../componets/Icon'
import Footer from '../../../componets/Footer'


function EvoxTop() {
  return (
    <>
    <div className="HeroAlloverContianer">
        <div className="HeroLeft_container">
          <div>
            <IsolationMode />
          </div>
          <div>
            <h2 className="Hero_Follow_us">FOLLOW US</h2>
            <p className="Hero_PText_FeelFree_to">
              Feel free to follow us on social media, you can get all the news
              and update on our platform and its easier to stay up to date
            </p>
            <div className=" Hero_Svg_Container">
              <div className=" Hero_SVGS">
                <img src="/Images/Insta.svg" />
              </div>
              <div className=" Hero_SVGS">
                <img src="/Images/Mesngr.svg" />
              </div>
              <div className=" Hero_SVGS">
                <img src="/Images/Xisx.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="EVoxHero_Right">
          <div className="Hero_TOp_ContainerRight">
            <Navbar />
            <div className="SmaalSCreenHeroAligmnt">
              <IsolationMode />
            </div>
            <div className="Hero_RightTextContainerUp">
              <div>
                <h2 className="Hero_RightHtext_EvoX">Evox <br/>
                Terms of service</h2>
              </div>
              {/* <div className="HeroRI8Text">
                <p className="Hero_RightText_upDateOn">
                  <span className="Span_Effective">Effective Date:</span>{" "}
                  Monday, 23rd September 2024
                </p>
                <p className="Hero_RightText_upDateOn">
                  <span className="Span_Effective">Updated On:</span> Monday,
                  23rd September 2024
                </p>
              </div> */}
            </div>
            {/* <div>
              <h2 className="Hero_RightHtext_EvoX">Privacy Policy</h2>
            </div> */}
            {/* <div className="HeroTextdowntoPrivacyPoilcy">
              <p className="Hero_RightText_upDateOn">
                <span className="Span_Effective">Effective Date:</span> Monday,
                23rd September 2024
              </p>
              <p className="Hero_RightText_upDateOn">
                <span className="Span_Effective">Updated On:</span> Monday, 23rd
                September 2024
              </p>
            </div> */}
            <div className="HeroTop_PTextPrivcy">
              <p >
              Please be aware that Evox services and products are not available to residents of the United States, Canada, and other restricted jurisdictions. Evox operates strictly within the legal frameworks applicable to our global operations and is committed to regulatory compliance.
              </p>
            </div>
     
          </div>
          <div className="HeroTopAligmntOnsmallscreen">
        <h2 className="Hero_Follow_us">FOLLOW US</h2>
        <p className="PtextAlignOnSmal_ScreenFeelFree">
          Feel free to follow us on social media, you can get all the news and
          update on our platform and its easier to stay up to date
        </p>
        <div className=" Hero_Svg_Container">
          <div className=" Hero_SVGS_0nSmal_screen">
            <img src="/Images/Insta.svg" />
          </div>
          <div className=" Hero_SVGS">
            <img src="/Images/Mesngr.svg" />
          </div>
          <div className=" Hero_SVGS">
            <img src="/Images/Xisx.svg" />
          </div>
        </div>
      </div>
        </div>
      </div>
      <DefultTerms/>
<Footer/>
    </>
  )
}

export default EvoxTop