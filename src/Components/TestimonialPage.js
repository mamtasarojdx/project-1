import React from 'react'

const TestimonialPage = () => {
  return (
    <>
      <section id='scrollspyTestimonial' className='block'>
        <div className='container-fluid' width="100%" >
          <div className='row'>
            <div className='testi-nomi'>
              <h1 id='testmonial_word'>TESTIMONIAL</h1>


              <div className='col-lg-2 col-md-2 col-sm-2'>

                <i class="fa fa-angle-left" id='rochak-left' style={{ padding: "28px 10px" }}></i>
              </div>


              <div className='col-lg-8 col-md-8 col-sm-8 text-start ' id='testmonial-form'>

                <p className='rochak'>Rochack</p>
                <i class="fa fa-quote-left" aria-hidden="true" id='left-quote'></i>
                <p className='Default_Model_Text'>Default model text</p>
                <div>Varoiuseditors now use Lorem Ipsum as their and a search for "lorem ipsum" will uncover many websites still in their infancy.</div>
                <div>Varoiuseditors now use Lorem Ipsum as their and a search for "lorem ipsum" will uncover many websites still in their infancy.</div>
                <div>Varoiuseditors now use Lorem Ipsum as their and a search "lorem ipsum" will uncover many websites still in their infancy.</div>
              </div>

              <div className='col-lg-2 col-md-2 col-sm-2'>
                <i class="fa fa-angle-right" id="rochak-right" style={{ padding: "28px 10px" }}></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>




  )
}

export default TestimonialPage
