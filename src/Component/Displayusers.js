import React from 'react';
import ReactTooltip from 'react-tooltip';
import {format, parseISO} from 'date-fns';

const Displayusers = ({users, changeStatus,changeModalstate}) => {
    
 
    return (

        <div>
       
        <table  className="table table-striped">
        
        <thead>
            <tr>
            <th scope="col"></th>
            <th></th>
            <th></th>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">StaffReg</th>
            <th scope="col">EmployeeType</th>
            <th scope="col">EmployeeGrade</th>
            <th scope="col">Designation</th>
            <th scope="col">LineManager</th>
            <th scope="col">Branch</th>
            <th scope="col">Department</th>
            <th scope="col">DateJoin</th>
            <th></th>
            <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody>


       
   
   {
        users.map((u,i)=>(
        <tr key={i}>
        <td>{i + 1}</td>         
        <td><button data-tip data-for="updatestatus"  onClick={changeModalstate} value={u._id}  type="button" className="btn btn-success" style={{backgroundColor: '#2A1372'}}><i className="fas fa-users-cog" ></i></button></td>
        <td><button data-tip data-for="changepassword" value={u._id}  type="button" className="btn btn-success" style={{backgroundColor: '#2A1372'}}><i class="fab fa-accessible-icon"></i></button></td>
        <td>{u.firstname}</td>
        <td>{u.lastname}</td>
        <td>{u.staffregnumber}</td>
        <td>{u.employeetype}</td>
        <td>{u.employeegrade}</td>
        <td>{u.designation}</td>
        <td>{u.linemanager}</td>
        <td>{u.branch}</td>
        <td>{u.department}</td>
        <td>{format(parseISO(u.createdAt), 'MM/dd/yyyy')}</td>
        <td><button onClick={changeStatus} value={u._id} type="button" className={u.status === 'active' ? 'btn btn-danger'  :'btn btn-success' }>{u.status === 'active' ? 'Deactivate' : 'Activate'}</button></td>
        <td style={{color: "#fff", backgroundColor: u.status === 'active'? '#2A1372' : '#D55451' }}>{u.status}</td>

       
        
        
       
        </tr>

       ))
   }



            
            </tbody>
            
        </table>
        <ReactTooltip id="updatestatus">
            <span>Update User Details</span>
        </ReactTooltip>

        <ReactTooltip id="changepassword">
            <span>Change User Password</span>
        </ReactTooltip>
      
        </div>
      
        
    )
}
 export  default Displayusers;