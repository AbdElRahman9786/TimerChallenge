import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'

const Result= forwardRef( function ResultModal({remainingTime,targetTime,reset},ref){
  const dialog=useRef()
  useImperativeHandle(ref,()=>{
    return{
      open(){
          dialog.current.showModal();
      }
    }
  })
  const YouLost=remainingTime<=0
  const timeFormated=(remainingTime/1000).toFixed(2)
  const score=Math.round((1-remainingTime /(targetTime*1000))*100)
  return createPortal(
    <dialog ref={dialog} className='result-modal' onClose={reset}>
{YouLost&& <h2>You lost</h2>} 
{!YouLost&&<h2>Your Score: {score}</h2>}
<p>
    Your target time was <strong>{targetTime} seconds.</strong>
  
</p>
<p>
    you stopped the timer with <strong>{timeFormated} seconds left .</strong>
</p>
<form method='dialog' onSubmit={reset}>
    <button>Close</button>
</form>
    </dialog>,
    document.getElementById('modal')
  );
  
})

export default Result;
