import { useState } from "react";

const Login_Page = () => {
  const [active, IsActive] =useState(" ");
  return (
    <>
      <section id='scrollspyLogin' className='block'><br /><br /><br />
        <h2 className='touch' onMouseOver={()=>IsActive(7)} style={active===7?{color:'black'}:{color:'white'}}>GET IN TOUCH</h2>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-6 '>
              <div class="mb-3" id='hospital-form'>
                <input type="Full Name" class="form-control" value='Full Name' id='hospital_input' /><br />
                <input type="Email" class="form-control" value='Email' id='hospital_input' /><br />
                <input type="Phone Number" class="form-control" value='Phone Number' id='hospital_input' /><br />
                <textarea class="form-control" id='textarea' value='Message' rows="3" />
                <button type='button' className='send'>SEND</button>

              </div></div>


            <div className='col-lg-6 col-md-6 col-sm-6'>
              <img src='contact-img.jpg' className='human-img'></img> </div>
          </div>

        </div>
      </section>
    </>


  )
}

export default Login_Page
