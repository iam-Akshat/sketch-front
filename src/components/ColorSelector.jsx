import { useState } from 'react';
import { useControls } from '../context/ControlsContext';

const ColorSelector = () => {
  const [activeColor, setActiveColor] = useState();
  const { setPenColor } = useControls();
  const changeColor = (e) => {
    const color = e.target.dataset.colorValue || e.target.value;
    setActiveColor(+e.target.dataset.id);
    setPenColor(color);
  };
  return (
    <div className="color-selector">
      <button
        data-color-value="black"
        data-id={0}
        style={{ backgroundColor: 'black' }}
        onClick={changeColor}
        className={activeColor === 0 ? 'active-color' : ''}
        type="button"
        aria-label="color-change-to-black"
      />
      <button
        data-color-value="red"
        data-id={1}
        style={{ backgroundColor: 'red' }}
        onClick={changeColor}
        className={activeColor === 1 ? 'active-color' : ''}
        type="button"
        aria-label="color-change-to-red"
      />
      <button
        data-color-value="blue"
        data-id={2}
        style={{ backgroundColor: 'blue' }}
        onClick={changeColor}
        className={activeColor === 2 ? 'active-color' : ''}
        type="button"
        aria-label="color-change-to-blue"
      />
      <input
        type="color"
        onChange={changeColor}
        data-id={3}
        className={activeColor === 3 ? 'active-color' : ''}
      />
    </div>
  );
};

export default ColorSelector;
