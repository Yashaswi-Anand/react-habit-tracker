import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addHabits, deleteHabits, updateHabits } from '../actions/workOnAction';
import '../Home.css'


function Home() {

  // selector hook
  const habit = useSelector(state => state.reducer)
  console.log(habit);

  // dispatch hooks
  const dispatch = useDispatch();

  const [inputHabit, setInputHabit] = useState("");

  // handle input and save in use state
  const handleChange = (e) => {
    setInputHabit(e.target.value)
  }

  // add habits
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
  const onEditHabit = (id) => {
    // console.log(id);
    dispatch(updateHabits(id))
  }

  return (
    <div>

      <div class="sidebar">
        <a class="active fs-4 heading-text" href="#home">ADD HABIT</a>

        <div>
          <input
            type='text'
            placeholder='Enter habit'
            value={inputHabit}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div><button className='add-btn' onClick={() => onAddHabit()}><h5>Add</h5></button></div>

        <div><Link to="/weeklyreport"><h4 className='wklyrept'>Goto Weekly Report</h4></Link></div>
      </div>

      <div class="content">
        <div><h3 className='m-3 heading-text'>Habit Tracker</h3></div>

        {habit.length === 0
          ? "Data is empty"
          : (habit.map((item, index) => (
            <div className='container'>
              <div className='row' key={item.id}>
                <div className='col-1 fs-3 p-1 ms-3 text-black'>{index + 1}.</div>
                <div className='col-3 fs-3 p-1 habit-text'>{item.habit}</div>
                <div className='col-4 fs-4 p-1' onClick={() => onEditHabit(item.id)} >
                  {item.status[0] == "DONE" ? <i className="fa-solid fa-circle-check text-success"></i>
                    : item.status[0] == "NOT-DONE" ? <i className="fa-solid fa-circle-xmark text-warning"></i>
                      : <i className="fa-solid fa-circle-minus text-danger"></i>}
                </div>
                <div className='col-3 p-1'><i onClick={() => onDeleteHabit(item.id)} className="fa-solid fa-trash-can fs-4 text-danger"></i></div>
              </div>
            </div>
          )))
        }
      </div>

    </div>
  )
}

export default Home