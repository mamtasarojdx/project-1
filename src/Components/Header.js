import { useState } from "react";


function Header() {
  const [active, IsActive] =useState(" ");
  
  
  return (
    <>
    <div className='header-bar'>
      
      <div className='container-fluid d-flex mt-2' width="100%">
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-10 home_bar '>
            <i className="fa fa-phone call_bar " style={{ color: "rgb(0,198,169)" }}></i> Call +011234567890
            <i className="fa fa-envelope email_bar " style={{ color: "rgb(0,198,169)" }}></i>Email : demo@gmail.com
            <i className="fa fa-map-marker location_bar" style={{ color: "rgb(0,198,169)" }}></i>Location
          </div>
        </div>
      </div>
      {/* ....................................... */}


 <section>
 <nav id="navbar-example2" class="navbar navbar-light side-bar" width="100%">
        <div className="container-fluid header_bar">
        <a className="navbar-brand first-logo " href="#" style={{ backgroundColor: "white" }}>
            <img className='logo' src='logo.png' />
          </a>
         
         <a className="navbar-brand"  href="#scrollspyHome" id="nav-home"  onClick={()=>IsActive(1)} style={active===1?{color:'black'}:{color:'white'}}>HOME</a>
       
        <a className="navbar-brand" href="#scrollspyAbout" id="nav-about" onClick={()=>IsActive(2)} style={active===2?{color:'black'}:{color:'white'}}>ABOUT</a>

       <a className="navbar-brand" href="#scrollspyTreatment" id="nav-treat" onClick={()=>IsActive(3)} style={active===3?{color:'black'}:{color:'white'}}>TREATMENT</a>
 <a className="navbar-brand" href="#scrollspyDoctors" id='nav-doc' onClick={()=>IsActive(4)} style={active===4?{color:'black'}:{color:'white'}}>DOCTORS</a>

         <a className="navbar-brand" href="#scrollspyTestimonial" id="nav-test" onClick={()=>IsActive(5)} style={active===5?{color:'black'}:{color:'white'}}>TESTIMONIAL</a>

         <a className="navbar-brand" href="#scrollspyContact" id="nav-cont" onClick={()=>IsActive(6)} style={active===6?{color:'black'}:{color:'white'}}>CONTACT US</a>

    <a className="navbar-brand" href="#scrollspyLogin" id="nav-login" onClick={()=>IsActive(7)} style={active===7?{color:'black'}:{color:'white'}}>
            <i class="fa fa-user" style={{ color: "white" }}>&nbsp; &nbsp;</i>LOGIN</a>

         <a class="navbar-brand" href="#scrollspySignUp" id="nav-sign" onClick={()=>IsActive(8)} style={active===8?{color:'black'}:{color:'white'}}>
            <i class="fa fa-user" style={{ color: "white" }}>&nbsp; &nbsp;</i>SIGN UP</a>

           <a class="navbar-brand" href="#" id="nav-search" >
            <i class="fa fa-search mt-2" style={{ color: "white" }}></i>
          </a>
        </div>
      </nav>
      
      </section>
  
</div>
</>
  )
}

export default Header;
