import React, { useState } from 'react'
import Heading from './Heading';
import './TicTacToe.css'
function TicTacToe() {
    const [flag,setFlag]=useState('X');
    const [matrix,setMatrix]=useState(Array(9).fill(''));
    const [winner,setWinner]=useState(null);
    const getwinner=(square)=>{
        const possibilities=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        possibilities.forEach(element => {
            if(square[element[0]]===square[element[1]] && square[element[1]]===square[element[2]] && square[element[0]]!=='')
            setWinner(square[element[0]]);
        });

    }
    const handleclick =(num)=>{
        if(matrix[num] !=='')
        {
            alert('already clicked');
            return;
        }
       let square=[...matrix];
       if (flag==='X')
       {
        square[num]='X';
        setFlag('O');
       }
       else{
        square[num]='O';
        setFlag('X');
       }
       setMatrix(square);
       getwinner(square);
    }
    const Cell=({num})=>{
        return <td onClick={()=>handleclick(num)} className="fonty">{matrix[num]}</td>
    }
    const resetGame=()=>{
        setFlag('X');
        setMatrix(Array(9).fill(''));
        setWinner(null);
    }
  return (
    <div className='container'>
        <Heading/>
        <h3>Its {flag}'s Turn</h3>
      <table>
        <tbody>
      <tr>
        <Cell num={0}/>
        <Cell num={1}/>
        <Cell num={2}/>
      </tr>
      <tr>
        <Cell num={3}/>
        <Cell num={4}/>
        <Cell num={5}/>
      </tr>
      <tr>
        <Cell num={6} />
        <Cell num={7} />
        <Cell num={8} />
      </tr>
      </tbody>
      </table>
      <button onClick={resetGame} style={{backgroundColor:"#E0FFFF",marginTop:"1em",padding:"5px 2em",borderRadius:"5px"}}className="fonty">RESET</button>
      {
      winner && (<h2 className='fonty'>'{winner}' is the winner!</h2>
      )}
    </div>
  )
}
export default TicTacToe;
