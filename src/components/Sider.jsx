import React from 'react'

const Sider = () => {
  return (
    <div class="fixed top-25vh left-0 flex-col justify-evenly space-y-5 w-25vw h-screen text-5xl shadow-lg shadow-neon-orange">
        <div class="text-red-600 hover:bg-black">Articles</div>
        <div class="text-red-600 hover:bg-black">Movies</div>
        <div class="text-red-600 hover:bg-black">Orgs</div>
        <div class="text-red-600 hover:bg-black">Free Food</div>
        <div class="text-red-600 hover:bg-black">Free Lodging</div>
        <div class="text-red-600 hover:bg-black">Racoons</div>
    </div>
  )
}

export default Sider