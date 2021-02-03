import React from "react";
import {Link} from 'react-router-dom';

const Layout = ({className, children}) =>(    
     <div className={className}>
          <nav class="navbar navbar-light bg-light">
        <Link class="navbar-brand" to="#">Mutual Trust Micro Finance Bank HR MANAGEMENT SYSTEM</Link>
    </nav>
          {children}

     </div>
     
)


export default Layout;