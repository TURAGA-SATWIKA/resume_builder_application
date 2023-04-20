import React from 'react'
import './contact.css'
import Header from './header';
import Footer from './footer';

function Contact() {
  return (
    <>
<Header/>
        <div className='signin_contact'>
            <h2>Contact form</h2>
            <form>
                <label style={{marginRight:'60px'}}>UserName</label>
                <input type='mail' name='email' placeholder='Enter your Username'/>
                <br/>
                <br/>
                <label style={{marginRight:'95px'}}>Email</label>
                <input type='mail' name='email' placeholder='Enter your email'/>
                <br/>
                <br/>
                <label style={{marginRight:'15px'}}>Contact Number</label>
                <input type='password' name='password' placeholder='Enter your Contact Number'/>
                <br/>
                <br/>
                <label style={{marginRight:'80px'}}>Queries</label>
                {/* <input type='mail' name='email' placeholder='Enter your email'/> */}
                <textarea />
                <br/>
                <br/>
                <input type='submit' style={{marginLeft:'100px'}} />
            </form>


        </div>
        <Footer/>

    </>
  )
}

export default Contact
