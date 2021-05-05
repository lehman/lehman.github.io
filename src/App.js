import './App.css';
import Navigation from './components/Navigation/Navigation';
import Intro from './components/Intro/Intro';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
            <Navigation></Navigation>
            <div id="main">
                <Intro></Intro>
                <Portfolio></Portfolio>
                <About></About>
                <Contact></Contact>
                <Resume></Resume>
            </div>

            <Footer></Footer>
        </>
    );
}

export default App;
