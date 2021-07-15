/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useControls } from '../context/ControlsContext';

const WidthSelector = ({
  min = 1, max = 10, step = 1, defaultValue = 5,
}) => {
  const { setPenWidth } = useControls();
  const [value, setValue] = useState(defaultValue);
  const handleWidthChange = (e) => {
    setValue(e.target.value);
    setPenWidth(e.target.value);
  };
  return (
    <div className="width-selector">
      <label htmlFor="width-picker">Width </label>
      <input type="range" id="width-picker" name="width-picker" value={value} min={min} max={max} step={step} onChange={handleWidthChange} />
      <span>{`${value}px`}</span>
    </div>
  );
};

export default WidthSelector;
