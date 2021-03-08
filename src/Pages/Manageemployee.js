import React,{useState, useEffect} from 'react'
import Layouttwo from '../Layout/Layouttwo';
import {getUser,updateUser } from "../Apicalls/apicore";
import Pagination from '../Component/Pagination';
import Displayusers from '../Component/Displayusers'


const Manageemployee =()=>{
     //Change page
     
    const [displayUsers, setdisplayUsers] = useState([]);
    const [error, setError] = useState(false);
    const [displayinfo, setInfo] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerpage] = useState(3);
    //Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
   

    const loadDsiplayUsers = async () =>{
        let getusers =await getUser();
     
        getusers.error
        ?setError(getusers.error)
        :setdisplayUsers(getusers.users);
       
    };
     //Get current posts
     const indexOfLastPost = currentPage * postsPerpage;
     const indexOfFirstPost = indexOfLastPost - postsPerpage;
     const currentUsers = displayUsers.slice(indexOfFirstPost, indexOfLastPost);

    const changeStatus = async (event) =>{
        let status;
        event.target.innerText == 'Deactivate'? status ='deactive': status = 'active';
        let id = event.target.value;
        let updatestatus = await updateUser(id, {status});
        updatestatus.error ? setdisplayUsers(updatestatus.error)
        :setInfo(true);
       loadDsiplayUsers();

    }
   
    useEffect(()=>{
        loadDsiplayUsers();
    },[])

    
return(
    <Layouttwo>
        <div className="main__container">
                <div className="main__title">
                    <img src="assets/banner.jpg" alt=""/>
                    <div className="main__greeting">
                        <h1>MUTUAL TRUST MFB(MANAGE EMPLOYEES)</h1>
                        <p>Welcome to your admin</p>
                        <p>{displayinfo}</p>
                    </div>
                </div>

                <hr className="main__cards"/>
            <div className="container-fluid">
               
                
               
            <Displayusers users={currentUsers} changeStatus={changeStatus}/>
            <Pagination paginate={paginate} postsPerpage={postsPerpage} totalPost={displayUsers.length} currentPage={currentPage}/>
            </div>
            
            </div>

          
       
        
    </Layouttwo>

)
}
export default Manageemployee;