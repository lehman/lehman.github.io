import './App.css';
import styled from 'styled-components';
import Header from './components/Header/Header';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import References from './components/References/References';

function App() {
    return (
        <Container>
            <Header />
            <Content>
                <About />
                <Portfolio />
                <References />
                <Contact />
            </Content>
            <Footer />
        </Container>
    );
}

const Container = styled.div`
    font-family: "Noto Serif JP", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;

    display: flex;
    flex-flow: column nowrap;
    gap: 20px;
`;

const Content = styled.div`
    margin: auto;
    max-width: 1720px;
`;

export default App;
