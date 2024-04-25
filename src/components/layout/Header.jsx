import React from 'react'
import ButtonBack from '../custom/ButtonBack'
import { useNavigate } from 'react-router-dom'

const Header = ({ home }) => {

    const navigate = useNavigate();

    const goHome = () => {
        navigate("/")
    }

  return (
    <div className='flex justify-between items-center px-5 py-5'>
      <ButtonBack />
    
        <div>
            {home &&
            <button className='font-jersey text-xl cursor-pointer' onClick={goHome}>Home</button>
            }
        </div>
    </div>
  )
}

export default Header
