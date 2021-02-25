
import {GENERALAPI,CLOUDAPI, USERAPI, LEAVEAPI} from "./config";

export const signup =async (user) =>{
    const {token} =  JSON.parse(localStorage.getItem("usersign"));

try{
    let createUsers = await fetch(`${GENERALAPI}/signup`,{
        method:"POST",
        headers:{
            Accept: 'application/json',
            "Content-Type": "application/json",
            "authorization" : `Bearer: ${token}`
        },
        body: JSON.stringify(user)
    });
        return createUsers.json();
}
catch(err)
{
       console.log(err);

}

};

//fetch all users
export const getUsers =async (page) => {
    try{
    let fetusers = await fetch(`${USERAPI}/allusers?page=${page}`, {
        method: "GET",
       
    });
    return fetusers.json()
    }
    catch(err) {console.log(err)}
};

//sigin api
export const signin =async (user) =>{
    return fetch(`${GENERALAPI}/signin`,{
        method:"POST",
        headers:{
            Accept: 'application/json',
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        console.log(response);
        return response.json();
    })
    .catch(err => {
       console.log(err);

    });

};
//signout
export const signout = (next) =>{
 
    if(typeof window !== 'undefined'){
        localStorage.removeItem("usersign");
        return fetch(`${GENERALAPI}/signout`,{
            method: "GET"
        })
        .then(response => {
            console.log('signout', response)
            
            
        })
        .catch(err => console.log(err));
    }
  }

  //statistics
  export const stats =async () => {
    try{
    let fetstats = await fetch(`${USERAPI}/stats`, {
        method: "GET"
    });
    return fetstats.json()
    }
    catch(err) {console.log(err)}
};
// get applied leaves
export const getLeaves =async (page) => {
    try{
    let fetleaves = await fetch(`${LEAVEAPI}/allleaves?page=${page}`, {
        method: "GET"
    });
    return fetleaves.json()
    }
    catch(err) {console.log(err)}
};
//update user
export const updateUser =async (id,update) => {
    try{
    let updateuser = await fetch(`${USERAPI}/${id}`, {
        method: "PUT",
        headers:{
            Accept: 'application/json',
            "Content-Type": "application/json",
        },
        body: JSON.stringify(update)
       
    });
    return updateuser.json()
    }
    catch(err) {console.log(err)}
};


