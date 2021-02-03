import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {isActive} from '../auth';
import logo from '../assets/images/logo.jpg';

const Sidebar = ({history})=> 
{
    const closeSidebar = async () =>
    {
        //define central store nd access redux
        var sidebar = document.getElementById("sidebar");
        sidebar.classList.remove("sidebar_responsive");
    
    
    }
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
<div className= {isActive(history, '/hrdashboard')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fa fa-home"></i>
    <Link to="/hrdashboard">Dashboard</Link>
</div>
<h2>ACCOUNT</h2>
<div className={isActive(history, '/profile')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fa fa-archive"></i>
    <Link to="/profile">Profile</Link>
</div>

<div className={isActive(history, '/manageemployee')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fa fa-handshake-o"></i>
    <Link to="/manageemployee">Manage Employee</Link>
</div>
<div className={isActive(history, '/addemployee')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fa fa-handshake-o"></i>
    <Link to="/addemployee">Add Employee</Link>
</div>

<h2>ATTENDANCE</h2>
<div className={isActive(history, '/notice')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fa fa-money"></i>
    <Link to="/notice">Check Notice board</Link>
</div>

<h2>LEAVES</h2>
<div className={isActive(history, '/checkresult')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fa fa-money"></i>
    <Link to="#">Submenu</Link>
</div>
<h2>PAYROLL</h2>
<div className={isActive(history, '/checkresult')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fa fa-money"></i>
    <Link to="#">Submenu</Link>
</div>
<h2>TAX AND BENEFIT</h2>
<div className={isActive(history, '/checkresult')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fa fa-money"></i>
    <Link to="#">Submenu</Link>
</div>
<h2>EMPLOYEE LIFE CYCLE</h2>
<div className={isActive(history, '/checkresult')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fa fa-money"></i>
    <Link to="#">Submenu</Link>
</div>
<h2>RECRUITMENT</h2>
<div className={isActive(history, '/checkresult')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fa fa-money"></i>
    <Link to="#">Submenu</Link>
</div>

<h2>TRAINING</h2>
<div className={isActive(history, '/checkresult')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fa fa-money"></i>
    <Link to="#">Submenu</Link>
</div>

<h2>PERFORMANCE</h2>
<div className={isActive(history, '/checkresult')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fa fa-money"></i>
    <Link to="#">Submenu</Link>
</div>
<h2>EXPENSE CLAIM</h2>
<div className={isActive(history, '/checkresult')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fa fa-money"></i>
    <Link to="#">Submenu</Link>
</div>
<h2>LOANS</h2>
<div className={isActive(history, '/checkresult')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fa fa-money"></i>
    <Link to="#">Submenu</Link>
</div>
<h2>SHIFT MANAGEMENT</h2>
<div className={isActive(history, '/checkresult')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fa fa-money"></i>
    <Link to="#">Submenu</Link>
</div>
<h2>FLEET MANAGEMENT</h2>
<div className={isActive(history, '/checkresult')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fa fa-money"></i>
    <Link to="#">Submenu</Link>
</div>
<h2>SETTING</h2>
<div className={isActive(history, '/checkresult')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fa fa-money"></i>
    <Link to="#">Submenu</Link>
</div>
<h2>REPORTS</h2>
<div className={isActive(history, '/checkresult')? 'sidebar__link active_menu_link' : 'sidebar__link' }>
    <i className="fa fa-money"></i>
    <Link to="#">Submenu</Link>
</div>
<div className="sidebar__logout">
    
    <span className="nav-link" style={{cursor: 'pointer', color: 'red'}}>
             <i className="fa fa-power-off"></i>
             Log out
             </span>
</div>


</div>
</div>
)
        }
export default withRouter(Sidebar);