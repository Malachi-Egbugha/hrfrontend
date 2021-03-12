import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {isActive,  isHr, isUnitHead} from '../auth';
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
        signout().then(history.push("/hrsystem"));    

    };
return(
    
    
<div id="sidebar">
<div className="sidebar__title" >
    <div className="sidebar__img">
        
        
    </div>
    <i className="fa fa-times" id="sidebarIcon" onClick={closeSidebar}></i>
</div>
    <div style={{display: "flex", justifyContent: "center"}}>
    <img style={{width: "100px", borderRadius: "50%"}} src={logo} alt=""/>
    </div>

<div className="sidebar__menu">
<div className= {isActive(history, '/hrsystem/hrdashboard')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fa fa-home"></i>
    <Link to="/hrsystem/hrdashboard">Dashboard</Link>
</div>

<h2>ACCOUNT</h2>
<div className={isActive(history, '/hrsystem/profile')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
<i className="fas fa-angry"></i>
   
    <Link to="/hrsystem/profile">Profile</Link>
</div>

<div style={isHr() ? {display: 'block'} : {display: 'none'}} className={isActive(history, '/hrsystem/manageemployee')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fa fa-handshake-o"></i>
    <Link to="/hrsystem/manageemployee">Manage Employee</Link>
</div>
<div style={isHr() ? {display: 'block'} : {display: 'none'}} className={isActive(history, '/hrsystem/addemployee')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
<i className="fas fa-archive"></i>
    <Link to="/hrsystem/addemployee">Add Employee</Link>
</div>


<h2>LEAVE MANAGEMENT</h2>
<div style={isHr() ? {display: 'block'} : {display: 'none'}} className={isActive(history, '/hrsystem/leaveapplications')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
<i className="fas fa-business-time"></i>
    <Link to="/hrsystem/leaveapplications">Manage Leave Applications</Link>
    </div>
    <div className={isActive(history, '/hrsystem/leaveapply')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fas fa-edit"></i>
    <Link to="/hrsystem/leaveapply">Apply for Leave</Link>
    </div>
    <div style={isUnitHead() ? {display: 'block'} : {display: 'none'}} className={isActive(history, '/hrsystem/lineapply')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fas fa-address-card"></i>
    <Link to="/hrsystem/lineapply">Manage Leave</Link>
    </div>
    <div style={isHr() ? {display: 'block'} : {display: 'none'}} className={isActive(history, '/hrsystem/checkresult')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fas fa-fax"></i>
    <Link to="#">Leave Report</Link>
    </div>


<h2>PERFORMANCE MANAGEMENT</h2>
    <div className={isActive(history, '/hrsystem/appraisal')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fas fa-archway"></i>
        <Link to="/hrsystem/appraisal">Appraisal</Link>
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