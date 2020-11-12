import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../assets/Logo.png';
import social_icons from '../assets/social_icons.svg';

//Footer section
function Footer() {
  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)

  return (
    <div className="mt-12 mx-48">
      <div className="main_footer h-40 flex">
        <div class="w-2/6">
          <img src={logo} />
          <img src={social_icons} className="pt-4"/>
        </div>

        <div class="w-1/6 pr-10">
          <input type="submit" value="Company" onClick={onClick} className="text-sm bg-white font-semibold mb-4"/>
          { showResults ? <Results_company /> : null }
        </div>

        <div class="w-1/6 pr-10">
          <input type="submit" value="Blog" onClick={onClick} className="text-sm bg-white font-semibold mb-4"/>
          { showResults ? <Results_blog /> : null }
        </div>

        <div class="w-1/6 pr-10">
          <input type="submit" value="Resources" onClick={onClick} className="text-sm bg-white font-semibold mb-4"/>
          { showResults ? <Results_resources /> : null }
        </div>

        <div class="w-3/6 pr-10">
          <input type="submit" value="Contact" onClick={onClick} className="text-sm bg-white font-semibold mb-4"/>
          { showResults ? <Results_contact /> : null }
        </div>

      </div>
      <div className="my-4">Footer</div>
    </div>
  );
};
export default Footer;


const Results_company = () => (
  <div id="results" className="font-light text-xs">
    <ul>
      <li>Leadership</li>
      <li>Newsroom</li>
    </ul>
  </div>
)

const Results_blog = () => (
  <div id="results" className="font-light text-xs">
    <ul>
      <li>Top blogs</li>
      <li>YouTube</li>
    </ul>
  </div>
)

const Results_resources = () => (
  <div id="results" className="font-light text-xs">
    <ul>
      <li>Test cases</li>
      <li>Research Team</li>
    </ul>
  </div>
)

const Results_contact = () => (
  <div id="results" className="font-light text-xs">
    <ul>
      <li>Email</li>
      <li>Phone</li>
    </ul>
  </div>
)
