import { Routes,Route } from 'react-router-dom';
import './App.css';
import Welcome from './Welcome';
import Login from './userDetailComponents/Login';
import Education from './userDetailComponents/Education';
import PersonalInfo from './userDetailComponents/PersonalInfo';
import Project from './userDetailComponents/Project';
import Skills from './userDetailComponents/Skills';
import Hobbies from './userDetailComponents/Hobbies';
import IntrestDomain from './userDetailComponents/IntrestDomain'
import Header from './Header';
import HomePage from './userDetailComponents/HomePage'
import {useState} from 'react'
function App() {
  const [account,setaccount]=useState("Login/SignUp");
  const tempjson = {
    personalInfo:{
      fullname:"",
      contactInfo:{
        phoneNumber: null,
        email:"",
        linkedIn:"",
        github:""
      },
      address:"",
      professionalTitle:""
    },
    educationalInfo:{
      degree:"",
      institutionName:"",
      city:"",
      courseDuration:null,
      gradeCGPA:null,
      internship:""
    },
    projectInfo:{
      projectTitle:"",
      projectDescription:"",
      technologiesUsed:[],
      githubLink:"",
      duration:null,
    },
    skills:{
      technicalSkill:[],
      softSkill:[]
    },
    hobbiesLanguage:{
      personalIntrest:[],
      languageKnown:[]
    },
    intrestedDomain:{
      domain:""
    }
  }

  return (
    <>
      <Header account={account}/> 
      <Routes>
        <Route path="/" element={<Welcome />}/>
        <Route path="/login" element={<Login setaccount={setaccount}/>}/> l
        <Route path="/signup/personalinfo" element={<PersonalInfo tempjson={tempjson}/>}/>
        <Route path="/signup/education" element={<Education/>} tempjson={tempjson}/>
        <Route path="/signup/projects" element={<Project/>} tempjson={tempjson}/>
        <Route path="/signup/skills" element={<Skills/>} tempjson={tempjson}/>
        <Route path="/signup/hobbies" element={<Hobbies/>} tempjson={tempjson}/>
        <Route path="/signup/intrestdomain" element={<IntrestDomain/>} tempjson={tempjson}/>
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
    </>
  );
}

export default App;
