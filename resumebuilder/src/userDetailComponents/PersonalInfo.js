import React from 'react';
import {Link} from 'react-router-dom';

const PersonalInfo = ({tempjson}) => {

  return (
    <div className="personal_info user_details">
      <h3>Personal Info</h3>
      <span>
        <label>FullName : </label>
        <input 
          type='text'
          id='fullname'
          name='fullname'
          /* code for get the input value from the usser and store into the value */
          onChange={(e)=>{tempjson.personalInfo.fullname=e.target.value;console.log(tempjson)}}
          />
      </span>
      <span>
        <label>Description</label>
        <textarea 
        onChange={(e)=>{tempjson.personalInfo.professionalTitle=e.target.value}}
        ></textarea>
      </span>
      <span>
        <label>phone Number</label>
        <input 
        onChange={(e)=>{tempjson.personalInfo.contactInfo.phoneNumber=e.target.value}}
        />
      </span>
      <span>
        <label>Email Address</label>
        <input
        onChange={(e)=>{tempjson.personalInfo.contactInfo.email=e.target.value}}
        />
      </span>
      <span>
        <label>LinkedIn profile</label>
        <input
        onChange={(e)=>{tempjson.personalInfo.contactInfo.linkedIn=e.target.value}}
        />
      </span>
      <span>
        <label>GitHub link</label>
        <input
        onChange={(e)=>{tempjson.personalInfo.contactInfo.github=e.target.value}}
        />
      </span>
      <span>
        <label>Address</label>
        <textarea
        onChange={(e)=>{tempjson.personalInfo.address=e.target.value}}
        ></textarea>
      </span>
      <span >
        <Link to="/">Back</Link>
        <Link to="/signup/education" onClick={()=>{console.log(tempjson)}}>Next</Link>
      </span>
    </div>
  )
}

export default PersonalInfo