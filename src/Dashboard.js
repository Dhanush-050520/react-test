import React from 'react'
// import { useState } from 'react';
import './App.css'
import { Link, Outlet } from 'react-router-dom';
import { FaElementor,FaSketch,FaSuperpowers,FaUserGroup,FaScrewdriverWrench} from "react-icons/fa6";

const Dashboard = () => {
    // const [isOpen, setIsOpen] = useState(false)
    //  const handleToggle = () => {
  //  setIsOpen(!isOpen);
  // };
    return (
        <div>
      <div className="sidebar-header">
        <h1>Board.</h1>

        
       
        {/* <button className="sidebar-toggle" onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
        </button> */}
        <div className="sidebar-menu">
          
       <h3> <Link to='dash' className='linker'><FaElementor/>Dashboard</Link></h3>
       <h3> <Link to='transactions' className='linker'><FaSketch/>Transactions</Link></h3>
       <h3> <Link to='schedules' className='linker'><FaSuperpowers/>Schedules</Link></h3>
       <h3> <Link to='users' className='linker'><FaUserGroup/>Users</Link></h3>
       <h3> <Link to='settings' className='linker'><FaScrewdriverWrench/>Settings</Link></h3>

        </div>
        
      
      </div>
      
     <div className='outlet1'>
     <Outlet/>
     </div>
    
    </div>
        
    )
}
export default Dashboard
