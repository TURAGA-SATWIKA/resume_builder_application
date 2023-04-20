import React from 'react'
import './signin.css'
import Header from './header';
import Footer from './footer';

function Signin() {
  return (
    <>
<Header/>
        <div className='signin_form'>
            <h2>Sign in</h2>
            <form>
                <label style={{marginRight:'40px'}}>Email</label>
                <input type='mail' name='email' placeholder='Enter your email'/>
                <br/>
                <br/>
                <label style={{marginRight:'10px'}}>Password</label>
                <input type='password' name='password' placeholder='Enter your Password'/>
                <br/>
                <br/>

                <input type='submit' style={{marginLeft:'100px'}} />
            </form>


        </div>
    
        <Footer/>
    </>
  )
}


export default Signin