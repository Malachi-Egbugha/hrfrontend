import React from 'react'
const Signupusers = ({handleChange,clickSubmit,values, displaylinemanagers}) => {
    const {
       firstname,
       lastname,
       createUser,
       middlename,
       staffregnumber,
       employeetype,
       employeegrade,
       designation,
       linemanager,
       branch,
       phone,
       department,
       password,
       error,
       loading,
       group,
       email,
       nextofkinname,
       nextofkinphone,
       nextofkinrelationship,
       nin,
       address
   }= values;
    
 
    return (
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
                   <label for="group">Group:</label>
                       <select onChange={handleChange('group')} class="form-control" id="group" required>
                       <option>Please Select</option>
                           <option value="unithead">MANAGERS</option>
                           <option value="staff">NON MANAGERS</option>
   
                       </select>
                   </div>
             </div>
             <div className="input-field col-sm-6 col-lg-4">
                   <div className="form-group">
                       <label for="designation">Designation:</label>
                       <input onChange={handleChange('designation')} value={designation} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Designation" required/>
                   </div>
             </div>
             <div className="input-field col-sm-6 col-lg-4">
                   <div className="form-group">
                       <label for="email">Email:</label>
                       <input onChange={handleChange('email')} value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" required/>
                   </div>
             </div>
             <div className="input-field col-sm-6 col-lg-4">
                   <div className="form-group">
                       <label for="nextofkinname">Next of Kin:</label>
                       <input onChange={handleChange('nextofkinname')} value={nextofkinname} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Next of Kin Name" required/>
                   </div>
             </div>
             <div className="input-field col-sm-6 col-lg-4">
                   <div className="form-group">
                       <label for="nextofkinphone">Next of Kin Phone Number:</label>
                       <input onChange={handleChange('nextofkinphone')} value={nextofkinphone} type="phone" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Next of Kin Phone Number" required/>
                   </div>
             </div>
             <div className="input-field col-sm-6 col-lg-4">
                   <div className="form-group">
                       <label for="nextofkinrelationship">Relationship with Next of Kin:</label>
                       <input onChange={handleChange('nextofkinrelationship')} value={nextofkinrelationship} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Relationship With Next of Kin" required/>
                   </div>
             </div>
             <div className="input-field col-sm-6 col-lg-4">
                   <div className="form-group">
                       <label for="nin">NIN:</label>
                       <input onChange={handleChange('nin')} value={nin} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter NIN" required/>
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
                           <option value="digitalmarketting">Digital Marketting</option>
                           <option value="devfinance">Development Finance</option>
                           <option value="fco">Finance</option>
                           <option value="none">NONE</option>
                       </select>
                   </div>
             </div>
            
             <div className="input-field col-sm-6 col-lg-4">
                   <div className="form-group">
                       <label for="password">Password:</label>
                       <input onChange={handleChange('password')} value={password} type="text" className="form-control" id="password" aria-describedby="emailHelp" placeholder="Enter Password" required/>
                       
                   </div>
             </div>

             <div className="input-field col-sm-6 col-lg-4">
                   <div className="form-group">
                   <label for="linemanager">Unit Head:</label>
                       <select onChange={handleChange('linemanager')} class="form-control" id="linemanager" required>
                       <option>Please Select</option>
                       <option value="none">NONE</option>
                       {displaylinemanagers.map((c, i) => (<option key={i} value={c.staffregnumber}>
                       {c.designation}
                       </option>))}
                      
                       </select>
                   </div>
             </div>
             <div className="input-field col-sm-12 col-lg-12">
                   <div className="form-group">
                       <label for="address">Address:</label>
                       <textarea  style={{width: "100%", height:"10vh" }} onChange={handleChange('address')} value={address} required></textarea>
                       
                   </div>
             </div>
             
    </div>
       
       <button className="btn btn-primary">Submit</button>
       </form>
        
        
    )
}
 export  default Signupusers;