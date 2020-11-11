import './styles/App.scss';
import Navbar from './components/section_1_navbar.js';
import Landing_page from './components/section_2_landing_page.js';
import Mini from './components/section_3_mini_links.js';

function App() {
  return (
    <div className="font-body static">
      <Navbar className="absolute"/>
      <Landing_page/>
      <Mini/>
    </div>
  );
}

export default App;
