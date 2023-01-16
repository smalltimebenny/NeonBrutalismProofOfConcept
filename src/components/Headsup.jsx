import React from 'react'
import NeonLight from './NeonLight'

const Headsup = () => {
  return (
      <div class="fixed top-0 left-0 flex flex-row justify-evenly items-center gap-x-2 h-25vh w-screen text-5xl shadow-lg shadow-neon-orange">
        <div class=" border-red-600 bg-gradient-to-r from-black to-neon-orange text-transparent bg-clip-text">Home</div>
        <div class=" bg-neon-orange text-transparent bg-clip-text">Neon Anarchist</div>
        <div class=" border-fuchsia-400 bg-gradient-to-r from-neon-orange to-black text-transparent bg-clip-text">Away</div>
      </div>
  )
}

export default Headsup