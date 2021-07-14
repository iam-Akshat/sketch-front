import { useBoard } from '../context/BoardContext';

const ClearBoard = () => {
  const { clearBoard } = useBoard();
  const handleClick = () => {
    clearBoard();
  };
  return (
    <button type="button" className="clean-btn" onClick={handleClick}> Clean Slate</button>
  );
};

export default ClearBoard;
