import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
        Home
        <Link to="/weeklyreport"> Weekly Report</Link>
    </div>
  )
}

export default Home