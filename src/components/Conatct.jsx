import React from 'react'
import { IoMdMail } from "react-icons/io";

function Conatct() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,192L80,165.3C160,139,320,85,480,90.7C640,96,800,160,960,176C1120,192,1280,160,1360,144L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
    <div className='contactSection'>
        <div className='leftContact'>
          <div className='leftInner'>
            <h1 className='leftContactHeading'>Conatct Details</h1>
            
          </div>
        </div>
        <div className='rightContact'>
          <div className='rightUpper'>
                <h1>Send Me Your Details</h1>
          </div>
          <div className='rightLower'>
            <form action="" method="post">
                {/* <label>Your Full Name :</label><br /> */}
                <input type="text" name="name" id="name" placeholder='Full Name'/><br />
                {/* <label>Email Address :</label><br /> */}
                <input type="email" name="email" id="email" placeholder='Email Id' /><br />
                {/* <label >Message :</label><br /> */}
                <textarea rows="4" cols="20" name="comment" form="usrform" > Enter Your Message</textarea><br />
                {/* <input className='submitBtn' type="submit" value="Send Me" /> */}
                <button className='submitBtn'>
                  <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                      <svg className='formBtn' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                      </svg>
                    </div>
                  </div>
                  <span className='submitSpan'>Send Me</span>
                </button>
            </form>
          </div>
          
        </div>
      
    </div>
    </>
  )
}

export default Conatct;
