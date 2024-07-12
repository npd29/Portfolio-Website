import './App.css';
import { Projects } from './components/projects/projects';
import { About } from './components/about/about';
import { Contact } from './components/contact';
import { Hero } from './components/hero/hero';
import { Footer } from './components/footer/footer';
import Skills from './components/skills/skills';

function App() {
    return (
        <div className="App">
            <Hero></Hero>
            <Skills></Skills>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
}

export default App;
