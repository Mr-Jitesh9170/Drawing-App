import { useState } from "react";
import "./drawing.scss";

export const DrawingApp = () => {
  const [control, setControl] = useState(0)
  const handleChange = (e) => {
    let value = e.target.innerHTML;
    if (value === "-") {
      setControl(control - 1)
    } else if (value === "+") {
      setControl(control + 1)
    }

  }
  return (
    <div className="drawing-container">
      <div className="drawing-top"> </div>
      <div className="drawing-bottom">
        <div className="part1">
          <div className="box" onClick={handleChange}>-</div>
          <div className="box">{control}</div>
          <div className="box" name="increase" onClick={handleChange}>+</div>
          <div className="box"></div>
        </div>
        <div className="box">X</div>
      </div>
    </div>
  )
}