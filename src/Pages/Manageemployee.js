import React,{useState, useEffect} from 'react'
import Layouttwo from '../Layout/Layouttwo';
import {getUsers,updateUser } from "../Apicalls/apicore";


const Manageemployee =()=>{
    const [displayUsers, setdisplayUsers] = useState([]);
    const [error, setError] = useState(false);
    const [displayinfo, setInfo] = useState(false);
   

    const loadDsiplayUsers = async () =>{
        let getusers =await getUsers('1');
        getusers.error
        ?setError(getusers.error)
        :setdisplayUsers(getusers.users);
    };
    const changeStatus = async (event) =>{
        let status;
        event.target.innerText == 'Deactivate'? status ='deactive': status = 'active';
        let id = event.target.value;
        let updatestatus = await updateUser(id, {status});
        updatestatus.error ? setdisplayUsers(updatestatus.error)
        :setInfo(true);
       loadDsiplayUsers();

    }
   
    useEffect(()=>{
        loadDsiplayUsers();
    },[])

    
return(
    <Layouttwo>
        <div className="main__container">
                <div className="main__title">
                    <img src="assets/banner.jpg" alt=""/>
                    <div className="main__greeting">
                        <h1>MUTUAL TRUST MICROFINANCE BANK(MANAGE EMPLOYEES)</h1>
                        <p>Welcome to your admin</p>
                        <p>{displayinfo}</p>
                    </div>
                </div>

                <hr className="main__cards"/>
            <div className="charts">
               
                
                <table className="table table-hover ">
                    <thead>
                        <tr>
                        <th scope="col"></th>
                        <th></th>
                        <th scope="col">Firstname</th>
                        <th scope="col">Lastname</th>
                        <th scope="col">StaffReg</th>
                        <th scope="col">EmployeeType</th>
                        <th scope="col">EmployeeGrade</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Line Manager</th>
                        <th scope="col">Branch</th>
                        <th scope="col">Department</th>
                        <th scope="col">DateJoin</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>


                   
               
               {
                   displayUsers.map((u,i)=>(
                    <tr>
                    <td>{i + 1}</td>         
                    <td><button onClick={changeStatus} value={u._id} type="button" className={u.status == 'active' ? 'btn btn-success' : 'btn btn-danger'}>{u.status == 'active' ? 'Deactivate' : 'Activate'}</button></td>
                    <td>{u.firstname}</td>
                    <td>{u.lastname}</td>
                    <td>{u.staffregnumber}</td>
                    <td>{u.employeetype}</td>
                    <td>{u.employeegrade}</td>
                    <td>{u.designation}</td>
                    <td>{u.linemanager}</td>
                    <td>{u.branch}</td>
                    <td>{u.department}</td>
                    <td>{u.createdAt}</td>
                    <td>{u.status}</td>

                   
                    
                    
                   
                    </tr>

                   ))
               }



                        
                        </tbody>
                    </table>
                    
               
            </div>
            </div>

          
       
        
    </Layouttwo>

)
}
export default Manageemployee;