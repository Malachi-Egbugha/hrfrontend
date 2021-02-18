import React,{useState, useEffect} from 'react'
import Layouttwo from '../Layout/Layouttwo';
import {getLeaves} from "../Apicalls/apicore";


const Leaveapplications =()=>{
    const [displayLeaves, setdisplayLeaves] = useState([]);
    const [error, setError] = useState(false);
   

    const loadDsiplayLeaves = async () =>{
        let getLeave =await getLeaves('1');
        getLeave.error
        ?setError(getLeave.error)
        :setdisplayLeaves(getLeave.leaves);
       
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
            <div className="charts">
               
                
                <table className="table table-hover ">
                    <thead>
                        <tr>
                        <th scope="col"></th>
                        <th></th>
                        <th scope="col">Firstname</th>
                        <th scope="col">Lastname</th>
                        <th scope="col">StaffReg</th>
                        <th scope="col">Department</th>
                        <th scope="col">LeaveType</th>
                        <th scope="col">StartDate</th>
                        <th scope="col">EndDate</th>
                        </tr>
                    </thead>
                    <tbody>


                   
              
          {
              
              displayLeaves.map((u,i)=>(
                <tr key={i}>
                <td>{1 + i}</td>         
                <td><button type="button" className="btn btn-success">{u.leavestatus}</button></td>
                <td>{u.firstname}</td>
                <td>{u.lastname}</td>
                <td>{u.staffregnumber}</td>
                <td>{u.department}</td>
                <td>{u. leavetype}</td>
                <td>{u.leavestart}</td>
                <td>{u.leaveend}</td>
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