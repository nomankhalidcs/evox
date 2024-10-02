import React from "react";
import "./EvoxHeroMid.css"
// import Footer from ".page/Footer/Footer";
// import Footer from "../Footer/Footer";
import Footer from "../../../componets/Footer";


function EVoxHeroMid() {
  return (
    <>
      <div className="HeroMidContainer">
        <h2 className="HeroMidHedingCollection">
          Collection and Use of Your Personal Information
        </h2>
        <h3 className="HeroMidInfromatiuontext">Information We Collect:</h3>
        <p className="PtextHeroMidWhenusing">
          When using the Evox platform, we may request certain personally
          identifiable information that can be used to contact or identify you.
          Evox collects the following information:
        </p>
        <ul className="litext">
          <li>Usage Data</li>
          <li>Name</li>
          <li>Email Address</li>
          <li>Decentralized Wallet Addresses (as applicable)</li>
        </ul>
        <h3 className="HeroMidUsageData">Usage Data may include:</h3>
        <ul className="litext">
        <li>Internet Protocol (IP) addresses of devices accessing the site</li>
        <li>Types of web page requests</li>
        <li>Referring pages (those that directed you to our site)</li>
        <li>The browser used to access our site</li>
        <li>The time and date of your access</li>
        <li> Platform usage statistics</li></ul>
        <div>
            <h2 className="HeroMidInfromatiuontext">How We Collect Information:</h2>
            <p className="PtextHeroMidWhenusing">Your information is collected in the following ways:</p>
            <ul className="litext">
            <li>When you complete a registration form or otherwise provide your personal information.</li>
            <li>By connecting your decentralized wallet to manage your assets on our platform.</li>
            <li>Automatically through the use of cookies and tracking technologies as you navigate the platform.
Your information will be retained for up to 90 days after it ceases to be necessary for the provision of our services, or for longer periods if required for legal compliance or record-keeping purposes. Information that does not personally identify you may be retained indefinitely for analytical purposes.</li></ul>
        </div>
        <div>
            <h2 className="HeroMidInfromatiuontext">How We Use Your Information:</h2>
            <p className="PtextHeroMidWhenusing">Evox may use your information for the following purposes:</p>
            <ul className="litext">
        <li><span className="HeroMid_TextProvide">To provide, maintain, and monitor</span> the performance of our Service.</li>
        <li><span className="HeroMid_TextProvide">Data analysis</span> to understand usage trends and to improve our Service, products, and marketing efforts.</li>
        <li><span className="HeroMid_TextProvide">Communication:</span> To contact you regarding security updates, changes to the Service, or marketing communicationsvia email, Telegram, or other forms of electronic communication.</li>
        <li><span  className="HeroMid_TextProvide" >Marketing and promotional efforts:</span> Non-specific information gathered from your use of our Service may be used to improve marketing campaigns and evaluate their effectiveness.</li>
       </ul>

        </div>
        <div>
            <h2 className="HeroMidInfromatiuontext ">How We Share Your Information:</h2>
            <p className="PtextHeroMidWhenusing ">Evox will share your information in the following situations:</p>
            <ul className="litext">
        <li><span className="HeroMid_TextProvide">With your explicit consent</span> for any specific purpose.</li>
        <li><span className="HeroMid_TextProvide">Data analysis</span> to understand usage trends and to improve our Service, products, and marketing efforts.</li>
        <li><span className="HeroMid_TextProvide">To third parties </span>only when necessary for legal compliance, including but not limited to:</li>
        <li>To comply with applicable laws, regulations, or legal processes.</li>
        <li>If your use of the Service infringes on the rights of third parties.</li>
        <li>To enforce our agreements, including this Privacy Policy.</li>
       </ul>


        </div>
        <div>
            <h2 className="HeroMidInfromatiuontext">Cookies:</h2>
            <p className="PtextHeroMidWhenusing">Cookies are small text files that are placed on your device to help navigate efficiently and perform certain functions. <span className="HeroMid_TextProvide">Strictly necessary cookies,</span> which are essential for the website's operation, are set automatically. All other cookies require your consent.
You may adjust your cookie settings via your browser to block non-essential cookies, but doing so may affect the functionality of the platform.
</p>
        </div>
        <div>
            <h2 className="HeroMidInfromatiuontext">Security:</h2>
            <p className="PtextHeroMidWhenusing">The security of your personal information is of utmost importance to us. Evox employs various security measures, including encryption and secure data storage, to protect your information from misuse, loss, or unauthorized access. However, no method of transmission over the internet is 100% secure, and we cannot guarantee the absolute security of your information.<br/>
Evox is not responsible for the performance or privacy practices of third-party websites that you may interact with via links on our platform. We recommend reviewing the privacy policies of those third-party sites before sharing any personal information.
</p>
        </div>
        <div>
            <h2 className="HeroMidInfromatiuontext">Your Data Protection Rights:</h2>
            <p className="PtextHeroMidWhenusing ">Depending on your jurisdiction, you may have the following rights regarding your personal information:</p>
            <li> <span className="HeroMid_TextProvide">Access: </span> Access: You can request copies of your personal data.</li>
            <li> <span className="HeroMid_TextProvide">Correction: </span>  You can ask for any incorrect or incomplete data to be corrected.</li>
            <li> <span className="HeroMid_TextProvide">Erasure: </span>  You can request the deletion of your personal data, subject to certain conditions.</li>
            <li> <span className="HeroMid_TextProvide"> Restriction:  </span> You can request that we limit the processing of your personal data.
</li>
            <li> <span className="HeroMid_TextProvide">Objection: </span> You can object to the processing of your personal data.
If you wish to exercise any of these rights, please contact us using the details provided below.</li>
        </div>
        <div>
            <h2 className="HeroMidInfromatiuontext">Contact Us:</h2>
            <p className="PtextHeroMidWhenusing ">If you have any questions or concerns regarding this Privacy Policy, or if you wish to exercise your rights, please contact us at:</p>
            <li> <span className="HeroMid_TextProvide">Name:</span> Evox Defi LLC
</li>
<li> <span className="HeroMid_TextProvide">Name:</span> Evox Defi LLC
</li>
<li> <span className="HeroMid_TextProvide">Email:</span>  contact@evoxtoken.io</li>
<li className="PtextHeroMidWhenusing "> <span className="HeroMid_TextProvide">Website: </span> <span className="WEBALign">www.evoxtoken.io</span></li>
<li className="PtextHeroMidWhenusing "> <span className="HeroMid_TextProvide">Address:</span>Suite 305, Griffith Corporate Centre, Beachmont,
Kingstown, St. Vincent and the Grenadines</li>

        </div>
      </div>
    <Footer/>

    </>
  );
}

export default EVoxHeroMid;
