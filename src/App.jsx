import { useState, useEffect } from 'react'
import './App.css'
import { trafficLight } from './data'

function App() {
  const [currentLight, setCurrentLight] = useState("red");
  const [timing, setTiming] = useState(100);
  console.log(trafficLight);
  
  useEffect(() => {
    const {duration, next} = trafficLight[currentLight];
    setTiming(duration);

    const timer = setTimeout(() =>{
      setCurrentLight(next);
    }, duration);

    return ()=>{
      clearTimeout(timer);
    }

  },[currentLight]);

  return (
    <>
    <div className='bar'></div>
    <div className='ligh-container'>
      {Object.keys(trafficLight).map((light) => {
        return (
          <div className='light'
          style={{backgroundColor: light === currentLight && trafficLight[light].backgroundColor}}></div>
        )
      })}
    </div>
    </>
  )
}

export default App
