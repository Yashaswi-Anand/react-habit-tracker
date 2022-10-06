import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addHabits, deleteHabits, updateHabits } from '../actions/workOnAction';


function Home() {

  const habit = useSelector(state => state.reducer)
  console.log(habit);
  const dispatch = useDispatch();

  const [inputHabit, setInputHabit] = useState("");

  const handleChange = (e) => {
    setInputHabit(e.target.value)
  }

  const onAddHabit = () => {
    const dateArray = [];
    const status = [];
    for (let i = 0; i < 7; i++) {
      const curDate = new Date();
      const date = new Date(curDate.setDate(curDate.getDate() - i));
      const dateInString = date.toString();
      dateArray[i] = dateInString.substring(4, 15);
      status[i] = 'NONE'
    }
    var habit = {
      'id': Math.floor(Math.random() * 1000),
      'habit': inputHabit,
      'status': status,
      'date': dateArray
    }
    dispatch(addHabits(habit))
    setInputHabit("");
  }

  // delete habit
  const onDeleteHabit = (id) => {
    // console.log(id);
    dispatch(deleteHabits(id))
  }

  // edit status of habit
  const onEditHabit = (id) =>{
    // console.log(id);
    dispatch(updateHabits(id))
  }

  return (
    <div>
      <div>
        <Link to="/weeklyreport"> Weekly Report</Link>
      </div>

      <input
        type='text'
        placeholder='Enter habit'
        value={inputHabit}
        onChange={(e) => handleChange(e)}
      />

      <button onClick={() => onAddHabit()}>Add</button>

      {habit.length === 0
        ? "Data is empty"
        : (habit.map(item => (
          <div className='row mt-3 ms-5 ' key={item.id}>
            <div className='col-3 fs-6 text-align'>{item.habit}</div>
            <div className='col-3' onClick={() => onEditHabit(item.id)} > {item.status[0]}</div>
            <div className='col-3'><i onClick={() => onDeleteHabit(item.id)} className="fa-solid fa-trash-can fs-6"></i></div>
          </div>
        )))
      }
    </div>
  )
}

export default Home