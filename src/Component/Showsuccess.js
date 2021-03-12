import React from 'react'

const Showsuccess = ({createUser}) => {

    const showSuccess = () => createUser && (
        <div className="alert alert-info">
        <h2> {`${createUser}`}</h2>
        </div>

    )
    
 
    return (
        <div>
       {showSuccess()}
       </div>
        
        
    )
}
 export  default Showsuccess;