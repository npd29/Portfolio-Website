import './App.css';
import { Projects } from './components/projects/projects';
import { About } from './components/about/about';
import { Contact } from './components/contact';
import { Hero } from './components/hero/hero';

function App() {
    return (
        <div className="App">
            <Hero></Hero>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
}

export default App;
