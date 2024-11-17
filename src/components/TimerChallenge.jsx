import React, { useRef, useState } from 'react'
import { ResultModal } from './ResultModal';

export const TimerChallenge = ({title,targetTime}) => {
    const [TimerExpired,setTimerExpired]=useState(false)
    const [timerStarted,setTimerStarted]=useState(false)
    const timer=useRef();
    function handelTimer() {
       
     timer.current=setTimeout(()=>{
            setTimerExpired(true)
        },targetTime*1000)
        
        setTimerStarted(true)
    }
    function handelStop() {
        clearTimeout(timer.current)
        
    }
  return (
    <>
    {TimerExpired&&<ResultModal targetTime={targetTime} result='loast'/>}
    <section className='challenge'>
        <h2>{title}</h2>
        <p className='challenge-time'>
          {targetTime}second{targetTime>1?'s':''}
        </p>
      <p>
        <button onClick={timerStarted?handelStop:handelTimer}>
         {timerStarted?'stop':'start'} challenge
        </button>
      </p>
      <p className={timerStarted?'active':undefined}>
       {timerStarted?'Time is running..':'Timer inactive'} 
      </p>
    </section>
    </>
  )
}
