import React,{useState, useEffect} from 'react'
import Layouttwo from '../Layout/Layouttwo';
import {getUser,updateUser, finduser, getAllUsers } from "../Apicalls/apicore";
import Pagination from '../Component/Pagination';
import Showsuccess from '../Component/Showsuccess';
import Displayusers from '../Component/Displayusers';
import Editusers from '../Component/Editusers';




const Manageemployee =()=>{

 
    
     //Change page
   
    const [displayUsers, setdisplayUsers] = useState([]);
    const [modalIsOpen, setModalIsOpen] =useState(false);
    const [error, setError] = useState(false);
    const [displayinfo, setInfo] = useState('');
    const [edituserinfo, setEditUserInfo] = useState({
        firstname:'',
        lastname:'',
        middlename:'',
        branch:'',
       department:'',
       designation:'',
       employeegrade:'',
       group:'',
       employeetype:'',
       phone:'',
       staffregnumber:'',
       nextofkinname:'',
       nextofkinphone:'',
       nextofkinrelationship:'',
       email:'',
       nin:'',
       address:''
    });

    const [displaylinemanagers, setdisplaylinemanegers] =useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerpage] = useState(3);
    //Change page
    const paginate = (pageNumber) => {
        setInfo('');
        setCurrentPage(pageNumber)
    };
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
     const loadLineManagers = () => {
        getAllUsers().then(data => {
            if (data.error) {
                console.log(data.error)

            } else {
                
                setdisplaylinemanegers(data.users)
              
            }
        });
    }
    useEffect(() => {
        
        loadLineManagers();
     

    }, []);
    const fetchstatus = (info) =>{
        info.error ? setdisplayUsers(info.error)
        :setInfo(info.user.firstname + ' ' + 'successfully updated');
        setModalIsOpen(false);
    }
    const changeStatus = async (event) =>{
        let status;
        event.target.innerText == 'Deactivate'? status ='deactive': status = 'active';
        let id = event.target.value;
        let updatestatus = await updateUser(id, {status});
        updatestatus.error ? setdisplayUsers(updatestatus.error)
        :setInfo('User Status successfully updated');
       loadDsiplayUsers();

    }
    const changeModalstate =async (event) =>{
        let {value} = event.currentTarget;
        let edituser = await finduser(value);
        if(edituser.error) 
        {setError(edituser.error)}
        else{

            setEditUserInfo({...edituser.users[0]});
            setModalIsOpen(true);
        }
        
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
                        <p></p>
                    </div>
                </div>

                <hr className="main__cards"/>
            <div className="container-fluid">
             
                
             <Showsuccess createUser={displayinfo}/>  
            <Displayusers users={currentUsers} changeStatus={changeStatus} changeModalstate={changeModalstate}/>
            <Pagination paginate={paginate} postsPerpage={postsPerpage} totalPost={displayUsers.length} currentPage={currentPage}/>
            </div>
            
            </div>

          <Editusers modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} edituserinfo={edituserinfo} displaylinemanagers={displaylinemanagers} fetchstatus={fetchstatus}/>
      
        
    </Layouttwo>

)
}
export default Manageemployee;
