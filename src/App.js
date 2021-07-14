import './App.css';
import Board from './components/Board';
import ColorSelector from './components/ColorSelector';
import WidthSelector from './components/WidthSelector';
import { BoardProvider } from './context/BoardContext';
import { ControlsProvider } from './context/ControlsContext';

function App() {
  return (
    <ControlsProvider>
      <BoardProvider>
        <div className="App">
          <ColorSelector />
          <WidthSelector />
          <Board />
        </div>
      </BoardProvider>
    </ControlsProvider>
  );
}

export default App;
