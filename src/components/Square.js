import React, { useState } from 'react'
import "./Square.css";


const Square = ({onClick, value}) => {
//Board 컴포넌트에서 상속 받은 매개변수


    return (
        <button className="square" 
        onClick={onClick}>
            {value}
        </button>
    )
} 

export default Square;