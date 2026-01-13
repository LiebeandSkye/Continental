import React from 'react'
import './ProCard.css'
import Car from '../assets/Car.png'
const ProCard = () => {
    return (
        <div>
                <div className="card">
                    <div className="bg">
                        <img src={Car} alt="Car" className='w-64 h-[60%]'/>
                        <div className='text-red-500 font-bold'>Red Car</div>
                    </div>
                    <div className="blob"></div>
                </div>
        </div>
    )
}

export default ProCard
