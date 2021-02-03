
import React, {useState, useEffect} from 'react'
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
        employeegroup: '',
        designation: '',
        branch: '',
        phone: '',
        department:'',
        username: '',
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
        employeegroup,
        designation,
        branch,
        phone,
        department,
        username,
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
                    employeegroup: '',
                    designation: '',
                    branch: '',
                    phone: '',
                    department:'',
                    username: '',
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
                                <option>Type 1</option>
                                <option>Type 2</option>
                                <option>Type 3</option>
                                <option>Type 4</option>
                                <option>Type 5</option>
                            </select>
                        </div>
                  </div>
                  <div className="input-field col-sm-6 col-lg-4">
                        <div className="form-group">
                        <label for="employeegrade">Employee Grade:</label>
                            <select onChange={handleChange('employeegrade')} class="form-control" id="employeegrade" required>
                            <option>Please Select</option>
                                <option>Grade 1</option>
                                <option>Grade 2</option>
                                <option>Grade 3</option>
                                <option>Grade 4</option>
                                <option>Grade 5</option>
                            </select>
                        </div>
                  </div>
                  <div className="input-field col-sm-6 col-lg-4">
                        <div className="form-group">
                        <label for="employeegroup">Employee Group:</label>
                            <select  onChange={handleChange('employeegroup')} class="form-control" id="employeegroup" required>
                                <option>Please Select</option>
                                <option>Group 1</option>
                                <option>Group 2</option>
                                <option>Group 3</option>
                                <option>Grade 4</option>
                                <option>Group 5</option>
                            </select>
                        </div>
                  </div>
                  <div className="input-field col-sm-6 col-lg-4">
                        <div className="form-group">
                        <label for="designation">Designation:</label>
                            <select onChange={handleChange('designation')} class="form-control" id="designation" required>
                                <option>Please Select</option>
                                <option>hr</option>
                                <option>Designation 2</option>
                                <option>Designation 3</option>
                                <option>Designation 4</option>
                                <option>Designation 5</option>
                            </select>
                        </div>
                  </div>
                  <div className="input-field col-sm-6 col-lg-4">
                        <div className="form-group">
                        <label for="branch">Branch:</label>
                            <select onChange={handleChange('branch')} class="form-control" id="branch" required>
                                <option>Please Select</option>
                                <option>Branch 1</option>
                                <option>Branch 2</option>
                                <option>Branch 3</option>
                                <option>Branch 4</option>
                                <option>Branch 5</option>
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
                                <option>Department 1</option>
                                <option>Department 2</option>
                                <option>Department 3</option>
                                <option>Department 4</option>
                                <option>Department 5</option>
                            </select>
                        </div>
                  </div>
                  <div className="input-field col-sm-6 col-lg-4">
                        <div className="form-group">
                            <label for="username">User Name:</label>
                            <input onChange={handleChange('username')} value={username} type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter First Name" required/>
                            
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