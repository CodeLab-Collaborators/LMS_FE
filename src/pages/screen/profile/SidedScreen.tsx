import React from 'react'

const SidedScreen = () => {
    return (
        <div className='w-full h-[70vh] bg-fuchsia-300 rounded-md  relative ' >
            <div className=' absolute w-[90%] h-[60vh] bg-fuchsia-800 mr-[100px] ' >
                <div className='w-[300px] h-[40vh] bg-white round-md fixed'>start</div>
            </div>
        </div>
    )
}

export default SidedScreen