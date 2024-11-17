import { useRef, useState } from "react";

export default function Player() {
  const [name,setName]=useState('');
  const playerName=useRef();
  
  function handeClick(){
setName(playerName.current.value);

  }

  return (
    <section id="player">
      <h2>Welcome {name?name:'unKnown entity'} </h2>
      <p>
        <input ref={playerName} type="text"  />
        <button onClick={handeClick}>Set Name</button>
      </p>
    </section>
  );
}
