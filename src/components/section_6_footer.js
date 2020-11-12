import React from 'react';
import logo from '../assets/Logo.png';
import social_icons from '../assets/social_icons.svg';

//Footer section
function Footer() {
  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)

  return (
    <div className="mt-12 md:mx-48">
      {/* Bottom top of the fotter bar */}
      <div className="main_footer md:h-40 flex flex-col md:flex-row ml-4 md:ml-0">
        <div class="md:w-2/6 ml-24 md:ml-0">
          <img src={logo} alt="logo image"/>
          <img src={social_icons} className="pt-4" alt="social icons"/>
        </div>

          {/* Company info with toggle functions */}
        <div class="w-1/6 pr-10">
          <input type="submit" value="Company" onClick={onClick} className="text-sm bg-white font-semibold mb-4"/>
          { showResults ? <ResultsCompany /> : null }
        </div>

        <div class="w-1/6 pr-10">
          <input type="submit" value="Blog" onClick={onClick} className="text-sm bg-white font-semibold mb-4"/>
          { showResults ? <ResultsBlog /> : null }
        </div>

        <div class="w-1/6 pr-10">
          <input type="submit" value="Resources" onClick={onClick} className="text-sm bg-white font-semibold mb-4"/>
          { showResults ? <ResultsResources /> : null }
        </div>

        <div class="w-3/6 pr-10">
          <input type="submit" value="Contact" onClick={onClick} className="text-sm bg-white font-semibold mb-4"/>
          { showResults ? <ResultsContact /> : null }
        </div>

      </div>

      {/* Bottom part of the footer */}
      <div className="my-4 flex">
        <div class="w-5/6 p-2">
          <p className="font-light text-xs">@ 2020 Imarc</p>
        </div>
        <div class="w-1/6 p-2 text-center">
          <p className="font-light text-xs">Security</p>
        </div>
        <div class="w-1/6 p-2 text-center">
          <p className="font-light text-xs">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;

//Result section when either button is clicked
const ResultsCompany = () => (
  <div id="results" className="font-light text-xs">
    <ul>
      <li>Leadership</li>
      <li>Newsroom</li>
    </ul>
  </div>
)

const ResultsBlog = () => (
  <div id="results" className="font-light text-xs">
    <ul>
      <li>Top blogs</li>
      <li>YouTube</li>
    </ul>
  </div>
)

const ResultsResources = () => (
  <div id="results" className="font-light text-xs">
    <ul>
      <li>Test cases</li>
      <li>Research Team</li>
    </ul>
  </div>
)

const ResultsContact = () => (
  <div id="results" className="font-light text-xs">
    <ul>
      <li>Email</li>
      <li>Phone</li>
    </ul>
  </div>
)
