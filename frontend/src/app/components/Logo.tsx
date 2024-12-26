import React from 'react'

interface LogoProps {
    margin: string;
}

export default function Logo({ margin }: LogoProps) {
  return (
    <div style={{margin}}>
        <span className='text-black text-4xl font-bold'>Dresser.</span>
    </div>
  )
}
