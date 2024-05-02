import React from 'react'

const TimeGameInfo = ({ game }) => {
  return (
    <div className='card card-side mt-5 bg-gray-400 text-black'>
      <div className='card-body'>
        <h2 className='card-title'>Temps de jeu pour : {game} </h2>
      </div>
    </div>
  )
}

export default TimeGameInfo
