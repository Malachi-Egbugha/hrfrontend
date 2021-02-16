import {Link} from 'react-router-dom';

const Layout = ({className, children}) =>
     
     
    
     (
     <div className={className}>
          <nav class="navbar navbar-light bg-light" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Link class="navbar-brand" to="#"><h2 style={{textShadow: "2px 2px #5d5753", fontWeight: 800, fontColor: "#000", fontSize: "2rem"}}>Mutual Trust Micro Finance Bank (HR MANAGEMENT SYSTEM)</h2></Link>
    </nav>
          {children}

     </div>
     )
     
     


export default Layout;