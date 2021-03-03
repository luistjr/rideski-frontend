import { useState } from 'react';
import Calendar from 'react-calendar'

function CreateItinerary({ user, setShowHome }) {


  // const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  // const days = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"]
  // const years = ["2021", "2022", "2023", "2024", "2025"]
  // const displayMonths = months.map((month) => {
  //   return <option value={month}>{month}</option>
  // })

  const toggleHome = setShowHome(false)
  const [value, setValue] = useState(new Date());

  console.log(value)

  function handleSubmit(e) {
    e.preventDefault();
    console.log('success');
  }


  return (
    <div>
      {toggleHome}
      <br />
      <form onSubmit={handleSubmit}>
        <Calendar
          onChange={setValue}
          value={value} />
        {/* <select id="rides" name="rides">
          {displayMonths}
        </select>
        <input type="submit" /> */}
      </form>
    </div>

  );
}

export default CreateItinerary;