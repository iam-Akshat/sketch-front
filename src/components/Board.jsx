import { useEffect } from 'react';
import { useBoard } from '../context/BoardContext';
import { useControls } from '../context/ControlsContext';

const Board = () => {
  const {
    boardRef,
    prepareBoard,
    startDrawing,
    finishDrawing,
    draw,
  } = useBoard();
  const { penColor, penWidth } = useControls();

  useEffect(() => {
    prepareBoard(800, 600);
  }, []);
  const drawWithUpdateControls = (e) => {
    startDrawing(e, penColor, penWidth);
  };
  return (
    <>
      <canvas
        onMouseDown={drawWithUpdateControls}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        ref={boardRef}
      />
    </>
  );
};

export default Board;
