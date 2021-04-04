import './App.css';
import { Characters } from './components/Characters';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Characters />
      </div>
    </div>
  );
}

export default App;
