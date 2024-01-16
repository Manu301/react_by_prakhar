import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className=' bg-black h-full'>
      <div className='flex justify-center'>
      <h1 className='font-bold text-4xl z-10 text-white mt-2'>Home Page</h1>
      </div>
      <div className='mt-9'>
        <p className='text-gray-400 text-xl w-3/4 ml-24'>This is an on demand react web application requested by (anonymous), made by one and only <span className='text-white text-2xl'>Prakhar Singhal</span></p>
      </div>
      <div className='h-72 w-75 bg-black m-7 flex items-center justify-between p-3'>
        <Link href="Time">Title-time</Link>
        <Link href="Click">Click-speed</Link>
        <Link href="Response">Response-time</Link>
      </div>
    </div>
  )
}

export default page