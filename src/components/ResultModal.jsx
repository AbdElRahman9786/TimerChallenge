import React from 'react'

export const ResultModal = ({result,targetTime}) => {
  return (
    <dialog className='result-modal' open>
<h2>You {result}</h2>
<p>
    Your target time was <strong>{targetTime} seconds.</strong>
  
</p>
<p>
    you stopped the timer with <strong>x seconds left .</strong>
</p>
<form method='dialog'>
    <button>Close</button>
</form>
    </dialog>
  )
}
