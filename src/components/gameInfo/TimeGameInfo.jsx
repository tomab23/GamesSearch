import React from 'react'
import hltb from "../../assets/images/h.png"

const TimeGameInfo = ({ game }) => {

  return (
    <div className='card card-side mt-5 bg-base-300'>
      <div className='flex'>
        <img src={hltb} alt="" className='w-20 p-2' />
        <a href={`https://howlongtobeat.com/?q=${game}`} target='_blank' 
        className='card-title cursor-pointer hover:underline '>
            Voir les temps de jeu
        </a>

        
      </div>
    </div>
  )
}

export default TimeGameInfo
