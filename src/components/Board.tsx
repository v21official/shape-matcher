import React, { useState, useEffect } from 'react';
import Cell, { CellProps } from './Cell';
import './Board.css';

const generateShapeAndColor = () => {
  return [
    { id: 1, shape: "circle", color: 'red' },
    { id: 2, shape: "circle", color: 'red' },
    { id: 3, shape: "circle", color: 'green' },
    { id: 4, shape: "circle", color: 'green' },
    { id: 5, shape: "circle", color: 'yellow' },
    { id: 6, shape: "circle", color: 'yellow' },
    { id: 7, shape: "circle", color: 'blue' },
    { id: 8, shape: "circle", color: 'blue' },
    { id: 9, shape: "square", color: 'red' },
    { id: 10, shape: "square", color: 'red' },
    { id: 11, shape: "square", color: 'green' },
    { id: 12, shape: "square", color: 'green' },
    { id: 13, shape: "square", color: 'yellow' },
    { id: 14, shape: "square", color: 'yellow' },
    { id: 15, shape: "square", color: 'blue' },
    { id: 16, shape: "square", color: 'blue' },
  ].sort(() => Math.random() - 0.5) as CellProps[]
}

const Board: React.FC = () => {
  const [items, setItems] = useState<CellProps[]>(generateShapeAndColor());
  const [itemSelected, setItemSelected] = useState<CellProps[]>([]);
  const [countRetry, setCountRetry] = useState(0);
  
  useEffect(() => {
    if (itemSelected.length === 1) {
      setItems((prev) => prev.map((item) => itemSelected[0].id === item.id ? ({ ...item, selected: true }) : item));
    } else if (itemSelected.length === 2) {
      setCountRetry((prev) => ++prev);
      setItems((prev) => prev.map((item) => [first.id, second.id].includes(item.id) ? ({ ...item, selected: true }) : item));
      const [first, second] = itemSelected;
      if (first.color === second.color && first.shape === second.shape) {
        setItemSelected([]);
      } else {
        setTimeout(() => {
          setItems((prev) => prev.map((item) => [first.id, second.id].includes(item.id) ? ({ ...item, selected: false }) : item));
          setItemSelected([]);
        }, 1000);
      }
    }
  }, [itemSelected]);


  const handleCellClick = async (index: number) => {
    setItemSelected((prev) => [...prev, items[index]]);
  };

  const handlePlayAgain = () => {
    setItems(generateShapeAndColor());
    setCountRetry(0);
  };

  return (
    <>
      <p>Number of guess: {countRetry}</p>
      <div className="board">
        {items.map((item, index) => (
          <Cell key={index} {...item} handleClick={() => handleCellClick(index)} />
        ))}
      </div>
      <button className='btn-try-again' onClick={handlePlayAgain}>PLAY AGAIN</button>
    </>
  );
};

export default Board;

