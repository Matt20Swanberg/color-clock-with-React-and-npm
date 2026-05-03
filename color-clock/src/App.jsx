import './App.css'
import { format } from 'date-fns'
import { useEffect, useState } from 'react'

function App() {
  // Store the current date/time in React state
  // Updating this value causes the component to re-render
  const [clockText, setClockText] = useState(new Date())

  // Update the clock once every second.
  useEffect(() => {
    const intervalId = setInterval(() => {
      setClockText(new Date());
    }, 1000)

    // Clean up the interval when the component is removed
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="clock-container">
      <div className="clock-box">
        <p>
          <span className="date">
            Current date: {format(clockText, 'MM/dd/yyyy')}
          </span>
          <span className="time">
            Current time: {format(clockText, 'hh:mm:ss a')}
          </span>
        </p >
      </div>
    </div>
  )
}

export default App