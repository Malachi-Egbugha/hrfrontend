import {GENERALAPI,CLOUDAPI} from "./config";
export const signup =async (user) =>{
    return fetch(`${CLOUDAPI}/signup`,{
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
