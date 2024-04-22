import React from 'react'
import InProgress from '../components/InProgress'

const Home = () => {
  return (
    <div data-theme="coffee" className='min-h-screen text-center'>
      <h1 className='text-9xl max-sm:text-6xl font-jersey'>GamesSearch</h1>
      <h2 className='text-2xl max-sm:text-xl font-jersey'>Information about your games</h2>

      <InProgress />

      <p className='3xl:mt-72 xl:mt-56 max-xl:mt-72 max-sm:mt-64 italic font-jersey text-lg'>Application in development...</p>
    </div>
  )
}

export default Home
