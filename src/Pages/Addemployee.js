
import React, {useState} from 'react'
import Layouttwo from '../Layout/Layouttwo';
import {signup} from '../Apicalls/apicore';


const Addemployee =()=>{
     const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        createUser: '',
        middlename: '',
        staffregnumber: '',
        employeetype: '',
        employeegrade: '',
        designation: '',
        branch: '',
        phone: '',
        department:'',
        password: '',
        error: '',
        loading: false

    });
    const {
         firstname,
        lastname,
        createUser,
        middlename,
        staffregnumber,
        employeetype,
        employeegrade,
        designation,
        branch,
        phone,
        department,
        password,
        error,
        loading

    }= values;
     const handleChange = name => event =>{
        const value = event.target.value;
        setValues({...values, createUser:'', [name]: value});

    };

     const clickSubmit = (event) =>{
        event.preventDefault();
        setValues({...values, error:'', loading: true});
        signup({...values})
        .then(data =>{
            if(data.error){
                console.log(data.error);
                setValues({...values, error: data.error})
            }else{
                
                setValues({
                    ...values, 
                     createUser: data.user.firstname,
                    firstname: '',
                    lastname: '',
                    middlename: '',
                    staffregnumber: '',
                    employeetype: '',
                    employeegrade: '',
                    designation: '',
                    branch: '',
                    phone: '',
                    department:'',
                    password: '',
                    error: '',
                    loading: false
                   
                    });
                
            }
        })
    }
    const showSuccess = () => createUser && (
        <div className="alert alert-info">
        <h2> {`${createUser}`} is created</h2>
        </div>

    )

     const showLoading = () =>loading && (
        <div className="alert alert-success">
        <h2> Loading ....... </h2>
        </div>
    )
    
    const signUpForm = () => (
        <form onSubmit={clickSubmit}>
             <div className="row">
                    <div className="input-field col-sm-6 col-lg-4">
                        <div className="form-group">
                            <label for="firstname">First Name:</label>
                            <input onChange={handleChange('firstname')} value={firstname} type="text" className="form-control" id="firstname" aria-describedby="emailHelp" placeholder="Enter First Name" required/>
                            
                        </div>
                  </div>
                  <div className="input-field col-sm-6 col-lg-4">
                        <div className="form-group">
                            <label for="exampleInputEmail1">Last Name:</label>
                            <input onChange={handleChange('lastname')} value={lastname} type="text" className="form-control" id="lastname" aria-describedby="emailHelp" placeholder="Enter Last Name" required/>
                            
                        </div>
                  </div>
                  <div className="input-field col-sm-6 col-lg-4">
                        <div className="form-group">
                            <label for="exampleInputEmail1">Middle Name:</label>
                            <input onChange={handleChange('middlename')} value={middlename} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Middle Name" required/>
                            
                        </div>
                  </div>
                  <div className="input-field col-sm-6 col-lg-4">
                        <div className="form-group">
                            <label for="staffregnumber">Staff Reg Number:</label>
                            <input onChange={handleChange('staffregnumber')} value={staffregnumber} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Middle Name" required/>
                        </div>
                  </div>
                  <div className="input-field col-sm-6 col-lg-4">
                        <div className="form-group">
                        <label for="stafftype">Staff Type:</label>
                            <select onChange={handleChange('employeetype')}  class="form-control" id="stafftype" required>
                                <option>Please Select</option>
                                <option value="Permanent">Permanent</option>
                                <option value="Casual">Casual</option>
                                
                            </select>
                        </div>
                  </div>
                  <div className="input-field col-sm-6 col-lg-4">
                        <div className="form-group">
                        <label for="employeegrade">Employee Grade:</label>
                            <select onChange={handleChange('employeegrade')} class="form-control" id="employeegrade" required>
                            <option>Please Select</option>
                                <option value="Grade 1">Grade 1</option>
                                <option value="Grade 2">Grade 2</option>
                                <option value="Grade 3">Grade 3</option>
                                <option value="Grade 4">Grade 4</option>
                                <option value="Grade 5">Grade 5</option>
                            </select>
                        </div>
                  </div>
                  <div className="input-field col-sm-6 col-lg-4">
                        <div className="form-group">
                        <label for="designation">Designation:</label>
                            <input onChange={handleChange('designation')} value={designation} type="text" className="form-control" id="designation" aria-describedby="emailHelp" placeholder="Enter Designation" required/>
                        </div>
                  </div>
                  <div className="input-field col-sm-6 col-lg-4">
                        <div className="form-group">
                        <label for="branch">Branch:</label>
                            <select onChange={handleChange('branch')} class="form-control" id="branch" required>
                                <option>Please Select</option>
                                <option value="Ademola">Ademola Adetokubo</option>
                                <option value="Ajesa">Ajesa</option>
                                
                            </select>
                        </div>
                  </div>
                  <div className="input-field col-sm-6 col-lg-4">
                        <div className="form-group">
                            <label for="phone">Phone:</label>
                            <input onChange={handleChange('phone')} value={phone} type="phone" className="form-control" id="phone" aria-describedby="emailHelp" placeholder="Enter Phone Number" required/>
                            
                        </div>
                  </div>
                  <div className="input-field col-sm-6 col-lg-4">
                        <div className="form-group">
                        <label for="department">Department:</label>
                            <select onChange={handleChange('department')} class="form-control" id="department" required>
                            <option>Please Select</option>
                                <option value="admin">Admin</option>
                                <option value="credit">Credit</option>
                                <option value="finance">Dev Finance</option>
                                <option value="hr">Hr</option>
                                <option value="ict">ICT</option>
                                <option value="internal control">Internal Control</option>
                                <option value="loan monitoring">Loan Monitoring</option>
                                <option value="marketing">Marketing</option>
                                <option value="payroll">Payroll</option>
                                <option value="operations">Operations</option>
                                <option value="recovery">Recovery</option>
                            </select>
                        </div>
                  </div>
                 
                  <div className="input-field col-sm-6 col-lg-4">
                        <div className="form-group">
                            <label for="password">Password:</label>
                            <input onChange={handleChange('password')} value={password} type="text" className="form-control" id="password" aria-describedby="emailHelp" placeholder="Enter Password" required/>
                            
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
                        <h1>MUTUAL TRUST MICROFINANCE BANK(ADD EMPLOYEES)</h1>
                        <p>Welcome to your admin</p>
                    </div>
                </div>

                <hr class="main__cards"/>
                
                {showLoading()}
                {showSuccess()}
                {signUpForm()}
          


            
            </div>
       
        
    </Layouttwo>

)
}
export default Addemployee;