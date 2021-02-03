import Layout from "../Layout/Layout";
import './Signin.css';


const Signin = () => {
    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-mute">Username:</label>
                <input type="email" className="form-control"/>
            </div>
            <div className="form-group">
                <label className="text-mute">Password:</label>
                <input type="password" className="form-control"/>
            </div>
            <button className="btn btn-primary">Submit</button>
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

 


