import React, { useState } from 'react'
import InProgress from '../components/InProgress'
import ThemesTest from '../components/ThemesTest'

const Home = () => {

  const [theme, setTheme] = useState("coffee")

  return (
    <div data-theme={theme} className='min-h-screen text-center'>
      <ThemesTest setTheme={setTheme} />
      <h1 className='text-9xl max-sm:text-6xl font-jersey'>GamesSearch</h1>
      <h2 className='text-2xl max-sm:text-xl font-jersey'>Information about your games</h2>

      <InProgress />

      <p className='3xl:mt-72 xl:mt-40 max-xl:mt-60 max-sm:mt-52 italic font-jersey text-lg'>Application in development...</p>
      <p className='mt-1 italic font-jersey text-lg'>Coming in 2024</p>
    </div>
  )
}

export default Home
