import './styles/App.scss';
import Navbar from './components/section_1_navbar.js';
import LandingPage from './components/section_2_landing_page.js';
import Mini from './components/section_3_mini_links.js';
import Grid from './components/section_4_grid.js';
import Learn from './components/section_5_learn.js';
import Footer from './components/section_6_footer.js';

function App() {
  return (
    <div className="font-body static">
      <Navbar className="absolute"/>
      <LandingPage/>
      <Mini/>
      <Grid/>
      <Learn/>
      <Footer/>
    </div>
  );
}

export default App;
