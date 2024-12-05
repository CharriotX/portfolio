import './App.css';
import { About } from './layout/section/about/About';
import { Header } from './layout/header/Header';
import { Main } from './layout/section/main/Main';
import { Skills } from './layout/section/skills/Skills';


function App() {
    return (
        <div className="App">
            <Header></Header>
            <Main></Main>
            <About></About>
            <Skills></Skills>
        </div>
    );
}

export default App;