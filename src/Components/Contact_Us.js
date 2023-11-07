import React from 'react'

function Contact_Us() {
  return (
    <>
    <section id='scrollspyContact'>
      <div className='block'><br/>
<form class="row g-3 needs-validation text-start" id='appoitment_form' width="100%">
      <h4 className='book'>BOOK</h4>
      <h4 id='appoitment'>APPOINTMENT</h4>

  <div class=" col-lg-4 col-md-4 col-sm-3 ">
    <div id='patient-name'><label for="validationCustom01" class="form-label" >Patient Name</label></div>
    <input type="text" class="form-control"  style={{border:"2px solid rgb(0,198,169)"}} required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-lg-4 col-md-4 col-sm-3 ">
    <div id='doctor-name'>
    <label for="validationCustom04" class="form-label" >Doctor's Name</label></div>
    <select class="form-select"  style={{border:"2px solid rgb(0,198,169)"}} required>
      <option selected disabled style={{paddingRight:"310px"}}>Normal Distribution</option>
      <option>...</option>
    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  
  <div class="col-lg-4 col-md-4 col-sm-3 ">
    <div id='department-name'>
    <label for="validationCustom04" class="form-label" >Department Name</label></div>
    <select class="form-select" style={{border:"2px solid rgb(0,198,169)"}} required>
      <option selected disabled style={{paddingRight:"310px"}}>Normal Distribution</option>
      <option>...</option>
    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div class="col-lg-4 col-md-4 col-sm-3 "><div id='phone-number'>
    <label for="validationCustom01" class="form-label" >Phone Number</label></div>
<input type="text" class="form-control"  id='phone_number' value="xxxxxxxxxx" required/>
    
  </div>

  <div class="col-lg-4 col-md-4 col-sm-3 "><div id='symptoms'>
    <label for="validationCustom01" className="form-label symptoms" >Symptoms</label></div>
    <input type="text" class="form-control" style={{border:"2px solid rgb(0,198,169)"}} required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  
  <div class="col-lg-4 col-md-4 col-sm-3 "><div id='choose-date'>
 
    <label for="validationCustom01" class="form-label" id='form-date' >Choose Date</label></div>
    
    <input type="text" class="form-control" id='date' value="08-16-2023"></input>
    <i class="fa fa-calendar"  id='calender'></i>
    
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
 
  <div class="col-lg-12 col-md-12 col-sm-10">
    <button type="submit" className='submit'>SUBMIT NOW</button>
  </div>
</form><br/><br/>
    </div>
    </section>
    </>
  )
}

export default Contact_Us
