import React,{useState} from 'react'
import Header from './header';
import Footer from './footer';
import './create.css'

function CreateResume() {

    const [fullname,setFullname] = useState(""); 
    const [number,setNumber] = useState("");
    const [mailid,setMailid] = useState("");
    const [experience,setExperience] = useState("");
    const [education,setEducation] = useState("");
    const [graduation,setGraduation] = useState("");
    const [address,setAddress] = useState("");
    const [hardskills,setHardskills] = useState("");
    const [softskills,setSoftskills] = useState("");
    const [hobbies,setHobbies] = useState("");
    const [projectyesorno,setProjectyesorno] = useState("");
    const [projects,setProjects] = useState("");
    const [certifications,setCertifications] = useState("");
    const [profilelink1,setProfilelink1] = useState("");
    const [profilelink2,setProfilelink2] = useState("");
    const [profilelink3,setProfilelink3] = useState("");


    const handleSubmit = (e) => {
      const person = {fullname,number,mailid,experience,education,graduation,address,hardskills,softskills,hobbies,projectyesorno,projects,certifications
                      ,profilelink1,profilelink2,profilelink3}
                      console.log(person)
                      // alert("hello")
      
  }

  return (
    <>
    <Header/>
    <h3 style={{marginLeft:'420px'}}>Please fill the below details correctly. these details will be entered into your resume.</h3>
    <div className='resume_fill'>
      
          <form onSubmit={handleSubmit}>
            <label><b>Enter your Full name</b></label>
            <input type='text' placeholder='Enter Full name'
            value={fullname} onChange={(e)=>{setFullname(e.target.value)}}/>
            <br></br>
            <br></br>
            <label><b>Enter your Contact Number</b></label>
            <input type='number' placeholder='Enter Full name'
            value={number} onChange={(e)=>{setNumber(e.target.value)}}/>
            <br></br>
            <br></br>
            <label><b>Enter your Mail id</b></label>
            <input type='text' placeholder='Enter Full name'
            value={mailid} onChange={(e)=>{setMailid(e.target.value)}}/>
            <br></br>
            <br></br>
            <label><b>Enter your Experience</b></label>
            <input type='text' placeholder='Enter Full name'
            value={experience} onChange={(e)=>{setExperience(e.target.value)}}/>
            <br></br>
            <br></br>
            <label style={{marginRight:'10px'}}><b>Upload Your PhotoGraph</b></label>
            <input type='file'/>
            <br></br>
            <br></br>
            <label><b>Enter your Highest Education</b></label>
            <select value={education} onChange={(e)=>{setEducation(e.target.value)}}>
              <option>Select your Education</option>
              <option>SSC</option>
              <option>Intermediate / Diploma</option>
              <option>B.Tech</option>
              <option>B.sc</option>
              <option>B.E</option>
              <option>MBA</option>
            </select>
            <br></br>
            <br></br>
            <label><b>Enter Year of Gradution</b></label>
            <input type='text' placeholder='Enter your year of graduation'
            value={graduation} onChange={(e)=>{setGraduation(e.target.value)}}/>
            <br></br>
            <br></br>
            <label><b>Enter your address</b></label>
            <textarea value={address} onChange={(e)=>{setAddress(e.target.value)}}></textarea>
            <br></br>
            <br></br>
            <label><b>Enter your Hard skills</b></label>
            <input type='text' placeholder='Enter your Skills'
            value={hardskills} onChange={(e)=>{setHardskills(e.target.value)}}/>
            <br></br>
            <br></br>
            <label><b>Enter your Soft skills</b></label>
            <input type='text' placeholder='Enter your Skills'
            value={softskills} onChange={(e)=>{setSoftskills(e.target.value)}}/>
            <br></br>
            <br></br>
            <label><b>Enter your Hobbies</b></label>
            <input type='text' placeholder='Enter your Hobbies'
            value={hobbies} onChange={(e)=>{setHobbies(e.target.value)}}/>
            <br></br>
            <br></br>
            <label><b>Have you done any Projects</b></label>
            <select value={projectyesorno} onChange={(e)=>{setProjectyesorno(e.target.value)}}>
              <option>Enter your selection</option>
              <option>Yes</option>
              <option>No</option>
            </select>
            <br></br>
            <br></br>
            <label><b>If yes please enter your Projects</b></label>
            <input type='text' placeholder='Enter your projects'
            value={projects} onChange={(e)=>{setProjects(e.target.value)}}/>
            <br></br>
            <br></br>
            <label><b>Enter your Certifications</b></label>
            <input type='text' placeholder='Enter your certifications'
            value={certifications} onChange={(e)=>{setCertifications(e.target.value)}}/>
            <br></br>
            <br></br>
            <label><b>Enter your profile links (i.e., linkedin, leetcode, codecheif, etc...)</b></label>
            <input type='text' placeholder='Enter the profile link' style={{width:'400px', height:'30px'}}
            value={profilelink1} onChange={(e)=>{setProfilelink1(e.target.value)}}/>
            <br></br>
            <br></br>
            <input type='text' placeholder='Enter the profile link' style={{width:'400px', height:'30px'}}
            value={profilelink2} onChange={(e)=>{setProfilelink2(e.target.value)}}/>
            <br></br>
            <br></br>
            <input type='text' placeholder='Enter the profile link' style={{width:'400px', height:'30px'}}
            value={profilelink3} onChange={(e)=>{setProfilelink3(e.target.value)}}/>
          
            <br></br>
            <br></br>
            <input type='submit' style={{marginLeft:'200px'}}/>
          </form>

    </div>
    <Footer/>
    
    </>
  )
}



export default CreateResume
