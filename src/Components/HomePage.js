import React from'react';
import { BiChevronLeft } from "react-icons/bi"
import { BiChevronRight } from "react-icons/bi"



function HomPage () {
  // const [active, IsActive] =useState(" ");
  
   return(
    <>
      <section id='scrollspyHome' className='block'>
      <div className='angle'>
        <div className='container-fluid  mico-style'>
          <div className='row'>

            <div className='col-lg-6 col-md-6 col-sm-5 text-start' id='home-right'>
              <i class="fa fa-play-circle" id='video_icon'></i>
              <h1 className='heading1'>MICO</h1>
              <h1 className='heading2'>HOSPITAL</h1>
              <div className='heading3'>When looking at its layout.The print of using Lorem ipsum is that it has a</div>
              <div className='heading4'>more-or-less normal distribution of letters,as opposed to</div>
              <button type='button' name='contact us' className='button'>Contact Us</button>
            </div>

            <div className='col-lg-6 col-md-6 col-sm-5 home-left'>
              <img src='slider-img.jpg' id='doctor_image' />

            </div>
          </div>
          <div className='icon'>
            <BiChevronLeft className='text-left fs-2 ' style={{ backgroundColor: "rgb(0,198,169)" }} />

            <BiChevronRight className='text-right fs-2' style={{ backgroundColor: "rgb(0,198,169)" }} />
          </div>
        </div>
      </div>
      

                            {/* ------------------------ */}



    </section>

    </>
    )
}

export default HomPage
