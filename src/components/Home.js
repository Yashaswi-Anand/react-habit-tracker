import React, { useState } from 'react'
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { addHabits } from '../actions/workOnAction';


function Home() {

  const habit = useSelector(state => state.reducer)
  console.log(habit);
  const dispatch = useDispatch();

  const [inputHabit, setInputHabit] = useState("");

  const handleChange = (e) => {
    setInputHabit(e.target.value)
  }

  const addDailyHabits = ()=>{
    var habit ={
      'id':Math.floor(Math.random()*1000),
      'habit': inputHabit,
    }
    dispatch(addHabits(habit))
    setInputHabit("");
  }

  return (
    <div>
        <div>
          <Link to="/weeklyreport"> Weekly Report</Link>
        </div>
        {/* <div> {habit[0].habit}</div> */}

        <input 
          type='text'
          placeholder='Enter habit'
          value={inputHabit}
          onChange={(e) => handleChange(e)}
        />

        <button onClick={() => addDailyHabits() }>Add</button>

        {habit.length === 0 
          ? "Data is empty"
          : (habit.map(item => (
            <div className='row mt-3 ms-5 ' key={item.id}>
              <div className='col-3 fs-6 text-align'>{item.habit}</div>
              <div className='col-2'><i className="fa-solid fa-pen-to-square fs-6"></i></div>
              <div className='col-1'><i className="fa-solid fa-trash-can fs-6"></i></div>
            </div>
          )))
        }
    </div>
  )
}

export default Home