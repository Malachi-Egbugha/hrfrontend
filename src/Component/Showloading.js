import React from 'react'

const Showloading = ({loading}) => {

    const showLoading = () =>loading && (
        <div className="alert alert-success">
        <h2> Loading ....... </h2>
        </div>
    )
 
    return (
        <div>
       {showLoading()}
       </div>
        
        
    )
}
 export  default Showloading;