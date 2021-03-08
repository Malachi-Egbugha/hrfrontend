import React,{useState, useEffect} from 'react'
import Layouttwo from '../Layout/Layouttwo';
import {getLeave} from '../Apicalls/apicore';
import Leaveapplication from '../Component/Leaveapplication';




const Leaveapply =()=>{
    
    const [error, setError] = useState('');
    const [displayLeaves, setdisplayLeaves] =useState([]);
     const loadDsiplayLeaves = async () =>{
        let getLeaves =await getLeave('1');
        getLeaves.error
        ?setError(getLeave.error)
        :setdisplayLeaves(getLeaves.myleave);
       
    };
    useEffect(()=>{
        loadDsiplayLeaves();
    },[])
    
    const showLeave = () => (
        <table className="table table-striped ">
        <thead>
            <tr>
            <th scope="col"></th>
            <th>LineManager</th>
            <th>HrApproval</th>
            <th scope="col">StaffReg</th>
            <th scope="col">LeaveType</th>
            <th scope="col">StartDate</th>
            <th scope="col">EndDate</th>
            <th scope="col">Comment</th>
            </tr>
        </thead>
        <tbody>
        {
              
              displayLeaves.map((u,i)=>(
                <tr key={i}>
                <td>{1 + i}</td>  
                <td style={u.lineleavestatus == 'pending'? {backgroundColor: '#D55451'}: {backgroundColor: '#2A1372'} }><button style={{color: '#ffffff'}} type="button" className="btn">{u.lineleavestatus}</button></td>       
                <td style={u.leavestatus == 'pending'? {backgroundColor: '#D55451'}: {backgroundColor: '#2A1372'} }><button style={{color: '#ffffff'}} type="button" className="btn">{u.leavestatus}</button></td>
                <td>{u.staffregnumber}</td>
                <td>{u.leavetype}</td>
                <td>{u.leavestart}</td>
                <td>{u.leaveend}</td>
                <td>{u.comment}</td>
                </tr>
              ))
                   
              
             
              
              


          }
         

            </tbody>
        </table>

    );
    return(
    <Layouttwo>
        <div class="main__container">
                <div class="main__title">
                    <img src="assets/banner.jpg" alt=""/>
                    <div class="main__greeting">
                        <h1>MUTUAL TRUST MFB(APPLY FOR LEAVE)</h1>
                        <p>Welcome to your admin</p>
                    </div>
                </div>

                <hr class="container-fluid"/>
                
                <Leaveapplication load  ={loadDsiplayLeaves}/>
                <hr/>
                {showLeave()}
          


            
            </div>
       
       
        
    </Layouttwo>

)
}
export default Leaveapply;