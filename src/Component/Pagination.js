import React from 'react'

const Pagination = ({postsPerpage, totalPost, paginate,currentPage}) => {
    
    const pageNumbers = [];
    for(let i =1; i <= Math.ceil(totalPost/postsPerpage); i++){
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination"  >
                {pageNumbers.map(number =>(
                    <li key={number} className="page-item" style={{backgroundColor: '#DA251C', borderRadius: '25%', marginRight: '0.6rem'}}>
                        <a onClick={() => paginate(number)} href="#" className="page-link" style={currentPage == number? {color: '#ffffff', backgroundColor:  '#DA251C', borderRadius: '50%'}:{color: '#ffffff', backgroundColor:  '#2A1372', borderRadius: '50%'}}>
                            {number}
                            
                        </a>

                    </li>
                ))}

            </ul>
            
        </nav>
    )
}
 export  default Pagination;