import './App.css';
import Board from './components/Board';
import ClearBoard from './components/ClearBoard';
import ColorSelector from './components/ColorSelector';
import FileDownloadButton from './components/FileDownloadButton';
import WidthSelector from './components/WidthSelector';
import { BoardProvider } from './context/BoardContext';
import { ControlsProvider } from './context/ControlsContext';

function App() {
  return (
    <ControlsProvider>
      <BoardProvider>
        <div className="App">
          <div className="control-panel">
            <div className="right">
              <ColorSelector />
              <WidthSelector />
            </div>
            <div className="left">
              <ClearBoard />
            </div>
          </div>

          <Board />
          <FileDownloadButton />
        </div>
      </BoardProvider>
    </ControlsProvider>
  );
}

export default App;
