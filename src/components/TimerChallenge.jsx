import React, { useRef, useState } from 'react'
import Result from './ResultModal';

export const TimerChallenge = ({title,targetTime}) => {
  const timer=useRef();
    const dialog=useRef();
   const [remainingTime,setRemainingTime]=useState(targetTime*1000);
const timerIsactive=remainingTime>0&&remainingTime<targetTime*1000;

    

    function handelTimerStart() {
       
     timer.current=setInterval(()=>{
            setRemainingTime(prev=>prev-10)
        },10)
        
        
    }
    if(remainingTime<=0){
      clearInterval(timer.current);
      dialog.current.open();
    }
    function handelReset() {
      setRemainingTime(targetTime*1000);
       
      
    }
    function handelStop() {
      dialog.current.open();
        clearInterval(timer.current)
        
        
    }
  return (
    <>
    <Result ref={dialog} targetTime={targetTime} reset={handelReset} remainingTime={remainingTime}/>
    <section className='challenge'>
        <h2>{title}</h2>
        <p className='challenge-time'>
          {targetTime}second{targetTime>1?'s':''}
        </p>
      <p>
        <button onClick={timerIsactive?handelStop:handelTimerStart}>
         {timerIsactive?'stop':'start'} challenge
        </button>
      </p>
      <p className={timerIsactive?'active':undefined}>
       {timerIsactive?'Time is running..':'Timer inactive'} 
      </p>
    </section>
    </>
  )
}
