import React, { useState } from 'react'

const ThemesTest = ({ setTheme }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const changeTheme = (theme) => {
        setIsOpen(!isOpen);
        setTheme(theme)
    }

    return (
<div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1" onClick={toggleDropdown}>Change Theme</div>
    {isOpen && 
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36">
        <li><button className='hover:underline' onClick={() => changeTheme("coffee")}>coffee</button></li>
        <li><button className='hover:underline' onClick={() => changeTheme("light")}>light</button></li>
        <li><button className='hover:underline' onClick={() => changeTheme("dark")}>dark</button></li>
        <li><button className='hover:underline' onClick={() => changeTheme("aqua")}>aqua</button></li>
        <li><button className='hover:underline' onClick={() => changeTheme("dracula")}>dracula</button></li>
        <li><button className='hover:underline' onClick={() => changeTheme("cyberpunk")}>cyberpunk</button></li>
        <li><button className='hover:underline' onClick={() => changeTheme("luxury")}>luxury</button></li>
        <li><button className='hover:underline' onClick={() => changeTheme("retro")}>retro</button></li>
        <li><button className='hover:underline' onClick={() => changeTheme("valentine")}>valentine</button></li>
        <li><button className='hover:underline' onClick={() => changeTheme("halloween")}>halloween</button></li>
        <li><button className='hover:underline' onClick={() => changeTheme("winter")}>winter</button></li>
        <li><button className='hover:underline' onClick={() => changeTheme("dim")}>dim</button></li>
        <li><button className='hover:underline' onClick={() => changeTheme("sunset")}>sunset</button></li>
    </ul>
    }
</div>
      );
}

export default ThemesTest







