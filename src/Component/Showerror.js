import React from 'react'

const Showerror = ({error}) => {

    const showError = () =>  (
        <div className="alert alert-danger" style={{display: error ? '': 'none'}}>
             {error}
          
        </div>
        );
 
    return (
        <div>
       {showError()}
       </div>
        
        
    )
}
 export  default Showerror;


