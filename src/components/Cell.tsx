import React, { MouseEventHandler } from 'react';
import './Cell.css';

export interface CellProps {
  shape: string;
  color: string;
  selected?: boolean;
  handleClick?: () => any;
}

const Cell: React.FC<CellProps> = (props: CellProps) => {
  return <div className="cell-wrapper" onClick={props.handleClick}>
    <div className={`${props.shape} color-${props.color} ${!!props.selected ? 'selected' : 'hide'}`} />
  </div>
};

export default Cell;
