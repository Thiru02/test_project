import React from 'react'

const StatusMessage = ({winner,noMovesLeft, current}) => {
    // const message = winner?`Winnner is ${winner}`:`Next player is ${current.isXNext?"X":"O"}`;
    return (
        <h2>
            {winner&&`Winner is ${winner}`}
            {noMovesLeft && !winner && `X and O tied`}
            {!noMovesLeft && !winner && `Next player is ${current.isXNext?"X":"O"}`}
        </h2>
    )
}

export default StatusMessage
