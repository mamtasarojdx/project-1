import React from 'react'
import { BiChevronLeft } from "react-icons/bi"
import { BiChevronRight } from "react-icons/bi"


const Doctors = () => {
  return (
   
          <>
          <section id='scrollspyDoctors' className='block'>
          <div className='container-fluid doctor-page' width="100%">
          <div className='row'>
      <div className='doctors'>
        <h1 className='our'>OUR
          <span style={{ color: "white" }}> DOCTORS</span></h1> </div>


            <div className='col-lg-1 col-md-1 col-sm-1 '>
              <BiChevronLeft className='icon-left fs-1' style={{ backgroundColor: "white" }} />
 </div>


            <div className='col-lg-3 col-md-3 col-sm-3' id='item-1' >
             
                <div class="card" id='Jenni_card'>
                  <div class="card-body">
                    <img src='team2.jpg' id='Jenni' />

                    <h4 >Jenni</h4>
                    <h6 style={{ color: "rgb(0,198,169)" }}>MBBS</h6>
                    <i class="fa fa-facebook-f p-2" ></i>
                    <i class="fa fa-twitter p-2" ></i>
                    <i class="fa fa-linkedin p-2" ></i>
                    <i class="fa fa-instagram p-2" ></i>
                  </div>
                </div>
              </div>

            

            <div className='col-lg-3 col-md-3 col-sm-3' id='item-2'>

              <div class="card" id='morco_card'>
                <div class="card-body" >

                  <img src='team3.jpg' id='Morco' />

                  <h4 >Morco</h4>
                  <h6 style={{ color: "rgb(0,198,169)" }}>MBBS</h6>
                  <i class="fa fa-facebook-f p-2" ></i>
                  <i class="fa fa-twitter p-2" ></i>
                  <i class="fa fa-linkedin p-2" ></i>
                  <i class="fa fa-instagram p-2" ></i>
                </div>
                </div>
                </div>
            
           


            <div className='col-lg-3 col-md-3 col-sm-3 ' id='item-3'>
              <div class="card" id='henry_card'>
                <div class="card-body" >
                  <img src='team1.jpg ' id='Hennry' />

                  <h4 >Hennry</h4>
                  <h6 style={{ color: "rgb(0,198,169)" }}>MBBS</h6>
                  <i class="fa fa-facebook-f p-2" ></i>
                  <i class="fa fa-twitter p-2" ></i>
                  <i class="fa fa-linkedin p-2" ></i>
                  <i class="fa fa-instagram p-2" ></i>
                </div>
              </div>
            </div>



            <div className='col-lg-1 col-md-1 col-sm-1'>
              <BiChevronRight className='icon-right fs-1' style={{ backgroundColor: "white" }} />
            </div>
          </div> <br/><br/>
          </div>
          </section><br/><br/></>
          )
}

export default Doctors
