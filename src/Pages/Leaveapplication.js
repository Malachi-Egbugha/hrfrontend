import React,{useState, useEffect} from 'react'
import Layouttwo from '../Layout/Layouttwo';
import {getLeaves} from "../Apicalls/apicore";


const Leaveapplications =()=>{
    const [displayLeaves, setdisplayLeaves] = useState([]);
    const [error, setError] = useState(false);
   

    const loadDsiplayLeaves = async () =>{
        let getLeave =await getLeaves('4');
        getLeave.error
        ?setError(getLeave.error)
        :setdisplayLeaves(getLeave.leaves);
       
    }
    const submitstatus = (i) =>
    {
        let clickedstatus = document.getElementById(i);

        console.log(clickedstatus.data);
        //submit to backed
    }
   
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
            <div className="container-fluid">
               
                
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col"></th>
                        <th></th>
                        <th scope="col"></th>
                        <th scope="col">Status</th>
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
                <tr key={i}>
                <td>{1 + i}</td>  
                <td ><button onClick={() => submitstatus(i)}  type="button" className="btn btn-success">Submit</button></td>       
                <td>

                    <form>
                    <select data={u._id}  id={i}   class="form-control"  required>
                                <option value="accept">ACCEPT</option>
                                <option value="deny">DENY</option>
                   
                              
                     </select>
                     

                    </form>
                   
                    
                    </td>
                <td>{u.leavestatus}</td>
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
export default Leaveapplications;