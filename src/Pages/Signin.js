import Layout from "../Layout/Layout";
import React,{useState} from "react";
import {signin} from '../Apicalls/apicore';
import './Signin.css';


const Signin = () => {
    const [values, setValues] = useState({
        staffregnumber: '',
        password: '',
        error: '',
        loading: false,
        redirectToReferrer: false

   });
   const {staffregnumber, password, error, loading} = values;
   //handle change input
   const handleChange= name => event =>{
        setValues({...values, error: false, [name]: event.target.value});
       
   };
   //handle form submission
const clickSubmit = async (event) =>{
    event.preventDefault();
    //set loading to true
    setValues({...values, error: false, loading: true});
    //access sign in api
    let signdata = await signin({staffregnumber, password});
    console.log(signdata);
    //check if error in sign in
    //if no  error authenticate by writting to localstorage
    
}



//handle submission of form

      //if(signdata.error){
        //setValues({...values, error:signdata.error,loading: false});
    //}else{
     //   authenticate(signdata, () => {
       //     setValues({...values,redirectToReferrer: true});
       // });
    //}
    
    
//};


    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-mute">Username:</label>
                <input value={staffregnumber} onChange={handleChange('staffregnumber')} type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <label className="text-mute">Password:</label>
                <input value={password} onChange={handleChange('password')} type="password" className="form-control"/>
            </div>
            <button onClick={clickSubmit} type="submit" className="btn btn-primary">Submit</button>
            </form>
    );
    
return(
    <Layout className="outerdiv">
     <div className="loginbanner">
     
        <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
                {signUpForm()}
            </div>
        </div>
    </div>
    </Layout>
);
}

export default Signin

 


