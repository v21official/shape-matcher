import React from 'react';
import './Cell.css';

export interface CellProps {
  id: number;
  shape: string;
  color: string;
  selected?: boolean;
  handleClick?: () => any;
}

const Cell: React.FC<CellProps> = (props: CellProps) => {
  return <div className="cell-wrapper" data-testid="cell-element" onClick={!props.selected ? props.handleClick : () => {}}>
    <div className={`${props.shape} color-${props.color} ${!!props.selected && 'selected'}`} />
  </div>
};

export default Cell;
