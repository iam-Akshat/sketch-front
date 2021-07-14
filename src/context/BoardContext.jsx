import React, { useContext, useRef, useState } from "react";

const BoardContext = React.createContext();

export const BoardProvider = ({ children }) => {
  const [isDrawing, setIsDrawing] = useState(false)
  const boardRef = useRef(null);
  const contextRef = useRef(null);

  const prepareBoard = (width,height) => {
    const board = boardRef.current
    board.width = (width || window.innerWidth);
    board.height = (height || window.innerHeight);
    board.style.width = `${width || window.innerWidth}px`;
    board.style.height = `${height || window.innerHeight}px`;
    board.style.border = '2px solid black'

    const context = board.getContext("2d")
    context.lineCap = "round";
    context.strokeStyle = 'black';
    context.lineWidth = 5;
    contextRef.current = context;
  };

  const startDrawing = ({ nativeEvent },color,width) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.strokeStyle = color;
    contextRef.current.lineWidth = width;
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const clearBoard = () => {
    const board = boardRef.current;
    const context = board.getContext("2d")
    context.clearRect(0, 0, board.width, board.height)
  }

  const boardToImageUrl = () => {
    return boardRef.current.toDataURL()
  }

  return (
    <BoardContext.Provider
      value={{
        boardRef,
        contextRef,
        prepareBoard,
        startDrawing,
        finishDrawing,
        clearBoard,
        draw,
        boardToImageUrl
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export const useBoard = () => useContext(BoardContext);