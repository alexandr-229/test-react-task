import { Background } from './component/background';
import { Header } from './component/Header/Header';
import { Main } from './component/Main/Main';
import { Films } from './component/Films/Films';

function App() {
    return (
        <div className="App">
            <Background>
                <Header />
                <Main />
                <Films />
            </Background>
        </div>
    );
}

export default App;
