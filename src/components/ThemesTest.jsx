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
  <div tabIndex={0} role="button" className="btn m-1" onClick={toggleDropdown}>Change Theme
  <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg></div>
    {isOpen && 
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36">
        <li><button className='hover:underline theme-controller'aria-label="coffee" value={"coffee"} onClick={() => changeTheme("coffee")}>coffee</button></li>
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







