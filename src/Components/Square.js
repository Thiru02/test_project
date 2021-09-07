import React from 'react'

const Square = ({isWinningSquare,value,onClick}) => {
    return (
        <button type="button" style={{fontWeight:isWinningSquare?"bold":"normal"}} className="square" onClick={onClick}>
            {value}
        </button>
    );
};

export default Square
