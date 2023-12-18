'use client'
import { useEffect, useState } from "react";


const Countdown = () => {
    let time = 5
    const [remainingTime, setRemainingTime] = useState(time * 60)
    const [paused, setPaused] = useState(true)



    useEffect(()=>{
        if(!paused){
            const countdown = setInterval(()=>{
                setRemainingTime( remainingTime - 1)
            }, 1000)
            console.log(remainingTime)
            return () => clearInterval(countdown);
        }
    })
  
    const handlePause = () =>{
        setPaused(true)
    }
    const handleResume = () =>{
        setPaused(false)
    }
    return (
        <div>
            <p>{`${remainingTime}`}</p>
            <button onClick={handleResume}>Resume</button>
            <button onClick={handlePause}>Pause</button>
        </div>
    );
}

export default Countdown;