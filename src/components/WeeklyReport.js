import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { updateHabitStatusOfPastSevenDays } from '../actions/workOnAction';
import '../WeeklyReport.css'

function WeekReport() {


  const dispatch = useDispatch();
  const onEditStatusIndex = (index, id) => {
    // console.log("weekly", index,id);
    dispatch(updateHabitStatusOfPastSevenDays(index, id))
  }

  const date = (day) => {
    const curDate = new Date();
    const date = new Date(curDate.setDate(curDate.getDate() - day));
    const dateInString = date.toString();
    return dateInString.substring(4, 15);
  }

  // selector hook
  const habits = useSelector(state => state.reducer)
  // console.log(habits[0].date, "weekly");
  return (
    <div>
      <div className='container'>
        <div className='row mt-2 p-3'>
          <div className='col-1'><Link className='home-btn' to="/"><h2>HOME</h2></Link></div>
          <div className='col-11 heading-weekly-report'><h4 className='fs-2'>Weekly Report</h4></div>
        </div>
      </div>

      <div className='container p-2'>

        <table className="table table-bordered">
          <tr>
            <th className='fs-1 text-danger linearGradient'>*</th>
            <th className='fs-5 text-light bg-secondary'>{date(0)}</th>
            <th className='fs-5 text-light bg-secondary'>{date(1)}</th>
            <th className='fs-5 text-light bg-secondary'>{date(2)}</th>
            <th className='fs-5 text-light bg-secondary'>{date(3)}</th>
            <th className='fs-5 text-light bg-secondary'>{date(4)}</th>
            <th className='fs-5 text-light bg-secondary'>{date(5)}</th>
            <th className='fs-5 text-light bg-secondary'>{date(6)}</th>
          </tr>

          {habits.map((h, index) => (
            <tr data-index={index}>
              <th className='habit-text-wr'><li>{h.habit}</li></th>
              {h.status.map((s, i) => (
                <th key={i} onClick={() => onEditStatusIndex(i, h.id)} className='fs-4 bg-white'>
                  {s == "DONE" ? <i className="fa-solid fa-circle-check text-success"></i>
                    : s == "NOT-DONE" ? <i className="fa-solid fa-circle-xmark text-warning"></i>
                      : <i className="fa-solid fa-circle-minus text-danger"></i>}
                </th>
              ))}
            </tr>
          ))}

        </table>

      </div>


    </div>
  )
}

export default WeekReport