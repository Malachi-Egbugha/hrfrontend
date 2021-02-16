import {GENERALAPI,CLOUDAPI, USERAPI} from "./config";
export const signup =async (user) =>{

try{
    let createUsers = await fetch(`${GENERALAPI}/signup`,{
        method:"POST",
        headers:{
            Accept: 'application/json',
            "Content-Type": "application/json",
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


export const getUsers =async (page) => {
    try{
    let fetusers = await fetch(`${USERAPI}/allusers?page=${page}`, {
        method: "GET"
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
