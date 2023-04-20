import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>

    <div className='head'><h4 style={{marginTop:'10px'}}>Resume Builder Application</h4>
    <div className='buttons'>
    <ul>
    <Link to="/"><li><button>Home</button></li></Link>
    <Link to="/signin"><li><button>Sign in</button></li></Link>
      <Link to="/contact"><li><button>Contact us</button></li></Link>
    </ul>
    </div>
    </div>

    
    </>
  )
}

export default Header