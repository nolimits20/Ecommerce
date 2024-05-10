import React from 'react'
import styles from './banner.module.css'

export default function Banner() {
  return (
    <div className={styles.bhead}>
        <div className='text-3xl mx-auto my-auto bg-white w-[30%] h-[330px] rounded-3xl shadow-lg shadow-gray-600 text-center'> 
            <h2 className='my-10 text-xl text-[#3F4ADE] font-bold'>{new Date().getHours() >=12 ? 'Good Afternoon' : new Date().getHours() >= 16 ?  'Good evening' : 'Good Morning'} <br />Welcome to Nolimits Store</h2>
            <p className='text-2xl mt-16'>Everything works Perfect with Perfection</p>
            <button className='hover:shadow-[#030411] shadow-md bg-[#3f4ADE] hover:transition-transform hover:scale-110 mt-9 text-white text-sm text-center w-[180px] h-[60px] rounded-full'>OPEN CATALOG</button>
        </div>

    </div>
  )
}
