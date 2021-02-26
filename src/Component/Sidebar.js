import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {isActive,  isHr} from '../auth';
import {signout} from '../Apicalls/apicore';
import logo from '../assets/images/logo.jpg';

const Sidebar = ()=> 
{
    let history = useHistory();
    const closeSidebar = async () =>
    {
        //define central store nd access redux
        var sidebar = document.getElementById("sidebar");
        sidebar.classList.remove("sidebar_responsive");
    
    
    };
    const signoutnow =  () => {
        signout().then(history.push("/"));    

    };
return(
    
    
<div id="sidebar">
    {console.log(isHr())}
<div className="sidebar__title" >
    <div className="sidebar__img">
        
        
    </div>
    <i className="fa fa-times" id="sidebarIcon" onClick={closeSidebar}></i>
</div>
    <div style={{display: "flex", justifyContent: "center"}}>
    <img style={{width: "100px", borderRadius: "50%"}} src={logo} alt=""/>
    </div>

<div className="sidebar__menu">
<div className= {isActive(history, '/hrdashboard')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fa fa-home"></i>
    <Link to="/hrdashboard">Dashboard</Link>
</div>
<h2>ACCOUNT</h2>
<div className={isActive(history, '/profile')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fa fa-archive"></i>
    <Link to="/profile">Profile</Link>
</div>

<div style={isHr() ? {display: 'block'} : {display: 'none'}} className={isActive(history, '/manageemployee')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fa fa-handshake-o"></i>
    <Link to="/manageemployee">Manage Employee</Link>
</div>
<div style={isHr() ? {display: 'block'} : {display: 'none'}} className={isActive(history, '/addemployee')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fa fa-handshake-o"></i>
    <Link to="/addemployee">Add Employee</Link>
</div>
<h2>LEAVES</h2>
<   div style={isHr() ? {display: 'block'} : {display: 'none'}} className={isActive(history, '/leaveapplications')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fa fa-money"></i>
    <Link to="/leaveapplications">Leave Applications</Link>
    </div>
    <div className={isActive(history, '/leaveapply')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fa fa-money"></i>
    <Link to="/leaveapply">Apply for Leave</Link>
    </div>
    
    <div style={isHr() ? {display: 'block'} : {display: 'none'}} className={isActive(history, '/checkresult')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fa fa-money"></i>
    <Link to="#">Leave Report</Link>
    </div>
<h2>PERFORMANCE</h2>
    <div className={isActive(history, '/appraisal')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
        <i className="fa fa-money"></i>
        <Link to="/appraisal">Appraisal</Link>
    </div>

<div className="sidebar__logout">
    
    <span onClick={() => signoutnow ()} className="nav-link" style={{cursor: 'pointer', color: 'red'}}>
             <i className="fa fa-power-off"></i>
             Log out
             </span>
</div>


</div>
</div>
)
        }
export default Sidebar;