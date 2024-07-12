import React, { useState, useEffect} from 'react';
import { data } from './constants';

const ImageCar = () => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            handleNext();
        }, 5000)
        return () => {
            clearTimeout(timer);
        }
    }, [activeImageIndex]);

    const handleNext = () => {
        setActiveImageIndex((activeImageIndex + 1)% data.length);
    }

    const handlePrev = () => {
        if(activeImageIndex === 0){
            return setActiveImageIndex(data.length - 1);
        }
        setActiveImageIndex(activeImageIndex - 1);
    }

  return (
    <div className='flex justify-center '>
        <button onClick={handlePrev} className='font-bold p-4 m-10'>Previous</button>
        <img src={data[activeImageIndex]} alt='' className='w-[700px] h-[500px] object-contain' />
        <button onClick={handleNext} className='font-bold p-4 m-10'>Next</button>
    </div>
  )
}

export default ImageCar;