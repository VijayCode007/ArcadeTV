import React from 'react'
import MainMenu from '../Components/MainMenu'

function Home() {
  return (
    <div className='bg-blue-950 h-screen w-full flex flex-col justify-center items-center'>
        <h2 className='text-white text-6xl -translate-y-15'>Main Menu Screen</h2>
        <MainMenu/>
    </div>
  )
}

export default Home