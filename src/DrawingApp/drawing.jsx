import "./drawing.scss";

export const DrawingApp = () => {
  return (
    <div className="drawing-container">
      <div className="drawing-top"> </div>
      <div className="drawing-bottom">
        <div className="part1">
          <div className="box">-</div>
          <div className="box">10</div>
          <div className="box">+</div>
          <div className="box"></div>
        </div>
        <div className="box">X</div>
      </div>
    </div>
  )
}