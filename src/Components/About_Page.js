import React from 'react'

function About_Page() {
  return (
    <>
    <section id='scrollspyAbout' className='block'>
      <div className='container-fluid' width="100%">
      <div className='row'>
        <div className='col-lg-6 col-md-6 col-sm-6' id='lady-image'>
          <img src='about-img.jpg' className='hospital-image'/>
        </div>


        <div className='col-lg-6 col-md-6 col-sm-6 text-start' id='hospital-content'>
          
          <h1 id='about'>About 
         <span id='hospital'> Hospital </span></h1>
          <div id='normal'>has a more-or-less normal distribution of letters,as opposed to using 'Content here'</div>
          <div className="desk">here', making it look like readable editor English.Many desktop</div>
          <div id="publishing">publishing packages and web page editor has a more-or-less normal</div>
          <div id="distribution" >distribution of letters,as opposed to using'Content here','content here',</div>
          <div id="making" >making it look like readable English publishing packages and web page editors. </div>
  <br/><button type='button' className='Read_More'>Read More</button>
        </div>
       
      </div>

      </div>
      </section>
      <br/><br/>
   


      </>

  )
}

export default  About_Page
