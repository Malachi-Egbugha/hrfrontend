import React,{useState, useEffect} from 'react'
import Layouttwo from '../Layout/Layouttwo';
import {updateLeave, getdepartmentLeave} from "../Apicalls/apicore";


const Lineleaveapply =()=>{
    const [displayLeaves, setdisplayLeaves] = useState([]);
    const [error, setError] = useState(false);
   

    const loadDsiplayLeaves = async () =>{
        let getLeave =await getdepartmentLeave('1');
        console.log(getLeave);
        getLeave.error
        ?setError(getLeave.error)
        :setdisplayLeaves(getLeave.departmentleave);
       
    }
    const submitstatus = async (i,Id) =>
    {
        let clickedstatus = document.getElementById(i);
        let body = {lineleavestatus : clickedstatus.value};
        let updatedleave = await updateLeave(Id,body);
       
        updatedleave.error
        ?setError(updatedleave.error)
        :loadDsiplayLeaves();
        
    }
    const showError = () =>  (
        <div className="alert alert-danger" style={{display: error ? '': 'none'}}>
             {error}
          
        </div>
        );
   
    useEffect(()=>{
        loadDsiplayLeaves();
    },[])
    return(
    <Layouttwo>
        <div className="main__container">
                <div className="main__title">
                    <img src="assets/banner.jpg" alt=""/>
                    <div className="main__greeting">
                        <h1>MUTUAL TRUST MICROFINANCE BANK(LEAVE MANAGEMENT)</h1>
                        <p>Welcome to your admin</p>
                    </div>
                </div>

                <hr className="main__cards"/>
                {showError()}
            <div className="container-fluid">
               
                
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col"></th>
                        <th></th>
                        <th scope="col"></th>
                       
                        <th scope="col">UnitHeader</th>
                        <th scope="col">StaffReg</th>
                        <th scope="col">Department</th>
                        <th scope="col">LeaveType</th>
                        <th scope="col">StartDate</th>
                        <th scope="col">EndDate</th>
                        <th scope="col-2">Comment</th>
                        </tr>
                    </thead>
                    <tbody>


             
              
          {
              
              displayLeaves.map((u,i)=>(
                  
                <tr key={i} style={u.staffregnumber == JSON.parse(localStorage.getItem("usersign")).user.staffregnumber?{display: 'none'}: {display: ''}} >
                <td>{1 + i}</td>  
                <td >
                     { u.lineleavestatus != 'pending'? <button    onClick={() => submitstatus(i,u._id)}  type="button" className="btn btn-success" disabled  >Submit</button>:
                      <button    onClick={() => submitstatus(i,u._id)}  type="button" className="btn btn-success" >Submit</button>
                     }
                </td>       
                <td>

                    <form>
                    <select  id={i}   class="form-control"  required>
                                <option value="accept">ACCEPT</option>
                                <option value="deny">DENY</option>
                   
                              
                     </select>
                     

                    </form>
                   
                    
                    </td>
                    
                    

                  
                <td style={{color: "#fff", backgroundColor: u.lineleavestatus == 'pending'? '#D55451' : '#2A1372' }}>{u.lineleavestatus}</td>
                <td>{u.staffregnumber}</td>
                <td>{u.department}</td>
                <td>{u.leavetype}</td>
                <td>{u.leavestart}</td>
                <td>{u.leaveend}</td>
                <td>{u.comment}</td>
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
export default Lineleaveapply;