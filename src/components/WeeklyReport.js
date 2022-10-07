import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { updateHabitStatusOfPastSevenDays }  from '../actions/workOnAction';

function WeekReport() {


  const dispatch = useDispatch();
  const onEditStatusIndex =(index, id) => {
    // console.log("weekly", index,id);
    dispatch(updateHabitStatusOfPastSevenDays(index,id))
  }

  const date = (day) =>{
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
      <div>WeekReport
        <Link to="/"> Home</Link>
      </div>
    
      <div>    
     
        <table className="table table-bordered">  
            <tr>  
                <th>#</th>  
                <th>{date(0)}</th>  
                <th>{date(1)}</th>  
                <th>{date(2)}</th>  
                <th>{date(3)}</th>  
                <th>{date(4)}</th>  
                <th>{date(5)}</th>  
                <th>{date(6)}</th>  
            </tr>  
    
            {habits.map((h, index) => (  
              <tr data-index={index}>
                <th>{h.habit}</th>  
                {h.status.map((s,i) =>(
                  <th key={i} onClick={()=>onEditStatusIndex(i, h.id)}>{s}</th>
                ))} 
              </tr>  
            ))}  
    
        </table>  
    
    </div>

      
    </div>
  )
}

export default WeekReport