import React, { useEffect, useState } from "react";
import WeatherDisplay from "./weatherDisplay";
const def = {temperature : 0, conditions : "Cool"}
const App = () => {
const[info, setInfo] = useState(def)
useEffect(() => {
    setTimeout(() => {
      setInfo({ temperature: 25, conditions: "Sunny" })
    }, 1000)
  })
return (
    <div>
      <WeatherDisplay info={info} />
    </div>
  )
}

export default App;
