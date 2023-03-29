import React, { useState, useEffect } from 'react';
import Cell, { CellProps } from './Cell';
import './Board.css';

const generateShapeAndColor = () => {
  return [
    { shape: "circle", color: 'red' },
    { shape: "circle", color: 'red' },
    { shape: "circle", color: 'green' },
    { shape: "circle", color: 'green' },
    { shape: "circle", color: 'yellow' },
    { shape: "circle", color: 'yellow' },
    { shape: "circle", color: 'blue' },
    { shape: "circle", color: 'blue' },
    { shape: "square", color: 'red' },
    { shape: "square", color: 'red' },
    { shape: "square", color: 'green' },
    { shape: "square", color: 'green' },
    { shape: "square", color: 'yellow' },
    { shape: "square", color: 'yellow' },
    { shape: "square", color: 'blue' },
    { shape: "square", color: 'blue' },
  ].sort(() => Math.random() - 0.5) as CellProps[]
}

const Board: React.FC = () => {
  const [items, setItems] = useState<CellProps[]>(generateShapeAndColor());
  const [itemSelected, setItemSelected] = useState<CellProps[]>([]);
  
  useEffect(() => {
    if (itemSelected.length === 2) {
      // handle check matched
      setItemSelected([]);
    }
    // Initialize the game board with random shapes and colors
  }, [itemSelected]);

  const handleCellClick = (index: number) => {
    // Reveal cell, check for matches, update game state, and handle game completion
    const updateItem = items[index];
    updateItem.selected = true;
    setItems((prev) => prev.map((item, i) => index === i ? updateItem : item));
    setItemSelected((prev) => [...prev, items[index]]);
  };

  return (
    <div className="board">
      {items.map((item, index) => (
        <Cell key={index} shape={item.shape} color={item.color} handleClick={() => handleCellClick(index)} />
      ))}
    </div>
  );
};

export default Board;

