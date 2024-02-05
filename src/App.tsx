import './App.css';
import P5Wrapper from 'react-p5-wrapper';
import { Projects } from './components/projects/projects';
import { About } from './components/about/about';
import { Contact } from './components/contact';

function App() {
    return (
        <div className="App">
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
}

export default App;
