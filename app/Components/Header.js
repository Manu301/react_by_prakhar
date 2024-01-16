import React from 'react'

const Header = () => {
  return (
    <div>
        <nav id="navbar" className='flex items-center justify-between p-3'>
        <img src='https://th.bing.com/th/id/OIP.P8PvE93Oco-pQNRRV9rLmQHaHa?rs=1&pid=ImgDetMain' alt='Logo' height={75} width={75} className='rounded-full'/>
        <div className='flex justify-between pr-8 gap-7'>
            <h3>Github</h3>
            <h3>Phone</h3>
            <h3>Instgram</h3>
            <h3>Facebook</h3>
        </div>
        </nav>
    </div>
  )
}

export default Header