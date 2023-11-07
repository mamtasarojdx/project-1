import React from 'react'
import { BiCopyright } from "react-icons/bi"

const Sign_Up = () => {
  return (
    <>
      <section id='scrollspySignUp' className='block'>
        <div className='footer-page'>
          <div className='container-fluid ' width="100%">
            <div className='row'>
              <div className='col-lg-2 col-md-2 col-sm-2'>
                <img className='last-logo' src='logo.png' id='logo' />
              </div>

              <div className='col-lg-10 col-md-10 col-sm-10 footer'>
                <p className='mail_id'>Your mail </p>  <p className='subscribe'> SUBSCRIBE</p>
                <div className='hr_line'></div>
              </div>
            </div>
          </div>


          <div className='container-fluid' id='last-page' width="100%">
            <div className='row'>


              <div className='col-lg-3 col-md-3 col-sm-3 text-start' id='element-1'>
                <i class="fa fa-square-o" id='address'></i> ADDRESS
                <p><i class="fa fa-map-marker" ></i> Location</p>
                <p><i class="fa fa-phone" ></i>Call +011234567890</p>
                <p className='message'><i class="fa fa-envelope" ></i>demo@gmail.com</p>
                <i class="fa fa-facebook-f" id='facebook'></i>
                <i class="fa fa-twitter" id='twitter'></i>
                <i class="fa fa-linkedin" id='linkedin'></i>
                <i class="fa fa-instagram" id='instagram' ></i>
              </div>

              <div className='col-lg-3 col-md-3 col-sm-3 text-start' id='element-2'>
                <i class="fa fa-square-o" id='useful_link'></i> USEFUL LINK
                <h6 className='home'>Home</h6>
                <p >About</p>
                <p >Treatment</p>
                <p >Doctors</p>
                <p >Testmonial</p>
                <p  >Contact us</p>
              </div>

              <div className='col-lg-3 col-md-3 col-sm-3 text-start' id='element-3'>
                <div><i class="fa fa-square-o" id='latest_posts'></i> LATEST POSTS </div>
                <div className='normal-1'><img src='post1.jpg' className='post1' /> Normal distribution</div>
                <div className='normal-2'><img src='post2.jpg' className='post2' /> Normal distribution</div>
              </div>

              <div className='col-lg-3 col-md-3 col-sm-3 text-start' id='element-4'>
                <div>
                  <i class="fa fa-square-o" id='news'></i> NEWS </div>
                <div className='normal-3'><img src='post3.jpg' className='post3' /> Normal distribution</div>
                <div className='normal-4'><img src='post4.png' className='post4' /> Normal distribution</div>
              </div>
            </div>
          </div><br /><br /><br />
          <p id='template'>    <BiCopyright /> 2023 All Rights Reserved By Free HTML Templates </p>
        </div>
      </section>
    </>
  )
}

export default Sign_Up