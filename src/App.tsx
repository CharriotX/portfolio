import { About } from './layout/section/about/About';
import { Header } from './layout/header/Header';
import { Main } from './layout/section/main/Main';
import { Skills } from './layout/section/skills/Skills';
import { Works } from './layout/section/works/Works';
import { Contact } from './layout/contact/Contact';
import { Footer } from './layout/footer/Footer';


function App() {
    return (
        <div className="App">
            <Header></Header>
            <Main></Main>
            <About></About>
            <Skills></Skills>
            <Works></Works>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
}

export default App;