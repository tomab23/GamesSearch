import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardGame = () => {
    const navigate = useNavigate();

    const handleGameInfo = () => {
        navigate("/game")
    }
  return (
    <div className='w-40 h-40 bg-gray-500 cursor-pointer hover:scale-105' onClick={handleGameInfo}>
      
    </div>
  )
}

export default CardGame
