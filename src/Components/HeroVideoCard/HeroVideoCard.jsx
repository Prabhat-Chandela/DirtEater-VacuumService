import React from 'react'

function HeroVideoCard() {
  return (
    <div className='w-full h-full relative rounded-lg overflow-hidden'>

        <div className='w-full'>
        <video className='w-full max-h-full object-center' src="DE-heroVideo.mp4" autoPlay muted loop preload='metadata'></video>
      </div>

    <div className='absolute w-full h-full top-0 left-0 bg-black/20  p-3'>
    <h3>Heavy Duty Industrial Vacuums</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo sapiente, sed maiores tempore praesentium distinction</p>
    </div>

    </div>
  )
}

export default HeroVideoCard;