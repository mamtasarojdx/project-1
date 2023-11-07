import React from 'react'

const Hospital_Treatment = () => {

  return (
    <>
    <section id='scrollspyTreatment' className='block'>
      <h1>Hospital
    <span style={{color:"rgb(0,198,169)"}}> Treatment </span></h1>
    <div className='container-fluid treatment-heading' width="100%">
        <div className='row' id='treatment-content'>
            <div className='col-lg-3 col-md-3 col-sm-2 text-start' id='treatment-1'> <img src='t1.png'/>
                <h1 className='head-1'>Nephrologist Care</h1>
            <div >alternation in some form by,injected </div>
            <div >humour, or randomised word which</div> 
            <div >don't look even slightly e sure there</div>
            <div >isn't anything</div>
            <h6 className='read_first'>READ MORE</h6><br/>
            </div>

             <div className='col-lg-3 col-md-3 col-sm-2 text-start' id='treatment-2'> <img src='t2.png' ></img>
               <h1 className='head-1'>Eye Care</h1>
               <div >alternation in some form by,injected </div>
            <div >humour, or randomised word which</div> 
            <div >don't look even slightly e sure there</div>
            <div >isn't anything</div>
           <h6 className='read_first'>READ MORE</h6>
            </div>

            <div className='col-lg-3 col-md-3 col-sm-2 text-start' id='treatment-3'> <img src='t3.png' ></img>
            <h1 className='head-1'>Padiatriacian Clinic</h1>
            <div >alternation in some form by,injected </div>
            <div >humour, or randomised word which</div> 
            <div>don't look even slightly e sure there</div>
            <div >isn't anything</div>
            <h6 className='read_first'>READ MORE</h6>
            </div>

            <div className='col-lg-3 col-md-3 col-sm-2 text-start' id='treatment-4'> <img src='t4.png' ></img>
            <div className='parental-image' style={{backgroundImage:'url("treatment-side-img.jpg")'}}></div>
            <h1 className='head-1'>Prental Care</h1>
            <div >alternation in some form by,injected </div>
            <div >humour, or randomised word which</div> 
            <div >don't look even slightly e sure there</div>
            <div>isn't anything</div>
            <h6 className="read_first">READ MORE</h6>  <br/> <br/>
            </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Hospital_Treatment
