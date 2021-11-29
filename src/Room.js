import React,{useState, useEffect} from "react";

export default function Room() {
  const previous = localStorage.getItem('light') ? localStorage.getItem('light') : '';
  const [isLightOn, setLight] = useState(previous);

  const lightStatus = isLightOn ? "lit" : "dark";

  const switchLight = () => {
    setLight(!isLightOn);
  };
useEffect(() => {
localStorage.setItem('light',lightStatus)
}, [lightStatus])
return (
    <div className={`room ${lightStatus}`}>
      The room is {lightStatus}
      <br />
      <button onClick={switchLight}>Switch</button>
    </div>
  );
} // Fertig ! 