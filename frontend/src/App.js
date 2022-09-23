import logo from './logo.svg';
import './App.css';
import {CreateBoard} from "./components/CreateBoard"
import {Board} from "./components/Board"

function App() {
  return (
    <div className="App">
     <div className="header">Minesweeper</div>
     <div className="body"><Board /></div>
     {console.log(CreateBoard(4,4,4))}
     
    </div>
  );
}

export default App;
