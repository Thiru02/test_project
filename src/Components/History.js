import React from 'react'

const History = ({history,moveT,count}) => {
    return (
        <ul>
            {history.map((_,move)=>{
                return(
                    <li key={move}>
                        <button 
                            type="button" 
                            style={{fontWeight:move===count?'bold':'normal'}} 
                            onClick={()=>moveT(move)}
                            > {move===0?`Go to start game`:`Go to move ${move}`}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}

export default History
