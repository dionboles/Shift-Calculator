import React, { useState } from 'react';
import './style.css';
function Cal(start, end) {
  if (!start) {
    return '';
  }
  if (!end) {
    return '';
  }
  let [Starthour, Startmin] = String(start).split(':');
  let [endhour, endmin] = String(end).split(':');
  return `${(+endhour + +endmin / 60).toFixed('2') -
    (+Starthour + +Startmin / 60).toFixed('2')} hour`;
}
export default function App() {
  const [startHours, setStartHours] = useState('');
  const [endHours, setEndHours] = useState('');
  return (
    <div className="main">
      <h1>Shift Calculator</h1>
      <label for="startHours">Start time</label>
      <input
        type="time"
        name="startHours"
        id="startHours"
        onChange={e => setStartHours(e.target.value)}
      />
      <br />
      <label for="endHours">End time</label>
      <input
        type="time"
        name="endHours"
        id="endHours"
        onChange={e => setEndHours(e.target.value)}
      />
      <p>{Cal(startHours, endHours)}</p>
    </div>
  );
}
