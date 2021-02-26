import React,{useState, useEffect} from 'react'
import Layouttwo from '../Layout/Layouttwo';



const Leaveapply =()=>{
    const signUpLeaveForm = () => (
        <form>
             <div className="row">
                  
                  
                  <div className="input-field col-sm-6 col-lg-4">
                        <div className="form-group">
                        <label for="branch">Leave Type:</label>
                            <select class="form-control" id="branch" required>
                                <option>Please Select</option>
                                <option value="Annual Leave">Annual Leave</option>
                                <option value="Maternity Leave">Maternity Leave</option>
                                <option value="Paternity Leave">Paternity Leave</option>
                                <option value="Sick Leave">Sick Leave</option>
                                <option value="Casual Leave">Casual Leave</option>
                                <option value="Bereavement leave">Bereavement leave</option>
                                <option value="Compensatory leave">Compensatory leave</option>
                                <option value="Sabbatical leave">Sabbatical leave</option>
                                <option value="Unpaid Leave">Unpaid Leave</option>  
                            </select>
                        </div>
                  </div>
                  <div className="input-field col-sm-6 col-lg-4">
                        <div className="form-group">
                            <label for="startdate">Start Date:</label>
                            <input  type="date" className="form-control" id="startdate" aria-describedby="emailHelp"  required/>
                            
                        </div>
                  </div>
                  <div className="input-field col-sm-6 col-lg-4">
                        <div className="form-group">
                            <label for="enddate">End Date:</label>
                            <input  type="date" className="form-control" id="enddate" aria-describedby="emailHelp"  required/>
                            
                        </div>
                  </div>
                
                 
                  

                  
                  
         </div>
            
            <button className="btn btn-primary">Submit</button>
            </form>
    );
    return(
    <Layouttwo>
        <div class="main__container">
                <div class="main__title">
                    <img src="assets/banner.jpg" alt=""/>
                    <div class="main__greeting">
                        <h1>MUTUAL TRUST MICROFINANCE BANK(APPLY FOR LEAVE)</h1>
                        <p>Welcome to your admin</p>
                    </div>
                </div>

                <hr class="main__cards"/>
                
             
                {signUpLeaveForm()}
          


            
            </div>
       
       
        
    </Layouttwo>

)
}
export default Leaveapply;