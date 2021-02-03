import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {isActive} from '../auth';




 const Navbar1=({history})=>{
   
    return(
    <nav className="navbar">
    <div className="nav_icon">
        <i className="fa fa-bars"></i>
    </div>
    <div className="navbar__left">
        <Link to="/">DASHBOARD</Link>
         {
             isActive(history, '/manageemployee')  ? <Link  to="/addemployee">ADD EMPLOYEE</Link> : ' '
             
        
         }
          {
             isActive(history, '/manageemployee') ? <Link className="active_link" to="#">MANAGE EMPLOYEE</Link> : ' '
             
        
         }
    </div>
    <div className="navbar__right">

        <Link to="#">
            <i className="fa fa-search"></i>
        </Link>
        <Link to="#">
            <i className="fa fa-clock-o"></i>
        </Link>
        <Link to="#">
            <img width="30"  src="assets/necco.png" alt=""/>
        </Link>
    </div>

</nav>
     

 )
}

 export default withRouter(Navbar1);













