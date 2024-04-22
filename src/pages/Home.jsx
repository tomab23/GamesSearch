import React from 'react'
import InProgress from '../components/InProgress'

const Home = () => {
  return (
    <div className='min-h-screen text-center'>
      <h1 className='text-9xl max-sm:text-6xl font-jersey'>GamesSearch</h1>
      <h2 className='text-2xl max-sm:text-xl font-jersey'>Information about your games</h2>

      <InProgress />
    </div>
  )
}

export default Home
