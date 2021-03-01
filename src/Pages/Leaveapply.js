import React,{useState, useEffect} from 'react'
import Layouttwo from '../Layout/Layouttwo';
import {leavesignup} from '../Apicalls/apicore';



const Leaveapply =()=>{
    const {
        firstname,
        lastname,
        middlename,
        staffregnumber,
        department,

    }= JSON.parse(localStorage.getItem("usersign")).user;
    const [values, setValues] = useState({
        firstname,
        lastname,
        createLeave: '',
        middlename,
        staffregnumber,
        department,
        leavetype: '',
        startdate: '',
        enddate: '',
        comment: '',
        error: '',
        loading: false
    });
    const {
         leavetype,
        startdate,
        enddate,
        createLeave,
        comment,
        error,
        loading
    }= values;
    
    
   const handleChange = name => event =>{
       const value = event.target.value;
       setValues({...values,createLeave:'', [name]: value});
   
   }
   const clickSubmit =async  (event) => {
       event.preventDefault();
       setValues({...values,error: " ", loading: true});
       try{
        let enterleave = await leavesignup({...values});
        let leavecreate = enterleave.leave.leavetype;
        setValues({
            ...values, 
             createLeave: leavecreate,
             firstname: '',
             lastname: '',
             middlename:'',
             staffregnumber:'',
             department:'',
             leavetype: '',
             startdate: '',
             enddate: '',
             comment: '',
             error: '',
             loading: false
           
            });
           
       }
       catch(err){
        console.log(err);
        setValues({...values, error: err});

       }
  
       
       
       
   }
   const showSuccess = () => createLeave && (
    <div className="alert alert-info">
    <h2> You have successfully applied for {`${createLeave}`}</h2>
    </div>

)

 const showLoading = () =>loading && (
    <div className="alert alert-success">
    <h2> Loading ....... </h2>
    </div>
)
const showError = () =>  (
    <div className="alert alert-danger" style={{display: error ? '': 'none'}}>
         {error}
      
    </div>
    );
    
    const signUpLeaveForm = () => (
        <form onSubmit={clickSubmit}>
             <div className="row">
                  <div className="input-field col-sm-6 col-lg-4">
                        <div className="form-group">
                        <label for="branch">Leave Type:</label>
                            <select onChange={handleChange('leavetype')} class="form-control" id="branch" required>
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
                            <input onChange={handleChange('startdate')} value={startdate} type="date" className="form-control" id="startdate" aria-describedby="emailHelp"  required/>
                            
                        </div>
                  </div>
                  <div className="input-field col-sm-6 col-lg-4">
                        <div className="form-group">
                            <label for="enddate">End Date:</label>
                            <input onChange={handleChange('enddate')} value={enddate}  type="date" className="form-control" id="enddate" aria-describedby="emailHelp"  required/>
                            
                        </div>
                  </div>

                  <div className="input-field col-sm-12 col-lg-12">
                        <div className="form-group">
                            <label for="comment">Comment:</label>
                            <textarea  style={{width: "100%", height:"10vh" }} onChange={handleChange('comment')} value={comment}></textarea>
                           
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
                
                {showLoading()}
                {showError()}
                {showSuccess()}
                {signUpLeaveForm()}
                <hr/>
          


            
            </div>
       
       
        
    </Layouttwo>

)
}
export default Leaveapply;