import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import cover from "../../assets/images/Cover.jpg"
import cover2 from "../../assets/images/cover3.png"
import cover3 from "../../assets/images/coverNewVegas.jpg"
import cover4 from "../../assets/images/cover76.jpg"

const CardGame = ({ game }) => {
    const navigate = useNavigate();

    const [cov, setCov] = useState();
    const [name, setName] = useState("")

    useEffect(() => {
      if (game === "fallout 4") {
        setCov(cover)
        setName("Fallout 4")
      }
      if (game === "fallout 3") {
        setCov(cover2)
        setName("Fallout 3")
      }
      if (game === "fallout new vegas") {
        setCov(cover3)
        setName("Fallout New Vegas")
      }
      if (game === "fallout 76") {
        setCov(cover4)
        setName("Fallout 76")
      }
    },[])

    const handleGameInfo = () => {
        navigate("/game", {state: game})
    }
  return (
    <div className='h-40 w-40 cursor-pointer hover:scale-105 flex flex-col card bg-base-100 shadow-xl
    max-sm:h-32 max-sm:w-32 max-sm:gap-1' 
    onClick={handleGameInfo}>
      <figure>
      <img src={cov} alt="" className='' />
      </figure>
        <p className='text-center font-jersey text-xl max-sm:text-sm'>{name}</p>
    </div>
  )
}

export default CardGame
