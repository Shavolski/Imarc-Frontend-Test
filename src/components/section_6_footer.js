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

        <div class="w-1/6 pr-2 bg-gray-500">
          <input type="submit" value="Company" onClick={onClick} className="text-lg bg-white font-semibold mb-4"/>
          { showResults ? <Results_developer /> : null }
        </div>

        <div class="w-1/6 p-2 bg-gray-400 text-center">.w-1/6</div>
        <div class="w-1/6 p-2 bg-gray-500 text-center">.w-5/6</div>
        <div class="w-3/6 p-2 bg-gray-400 text-center">.w-1/6</div>
      </div>
      <div className="my-4">Footer</div>
    </div>
  );
};
export default Footer;


const Results_developer = () => (
  <div id="results" className="font-light">
    <ul>
      <li>Leadership</li>
      <li>Newsroom</li>
    </ul>
  </div>
)
