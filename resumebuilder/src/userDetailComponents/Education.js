import React from 'react';
import {Link} from 'react-router-dom'

const Education = ({tempjson}) => {

  return (
    <div className="education_info user_details">
      <h3>Education Information</h3>
      <span>
        <label>Degree</label>
        <input
        type="text"
        onChange={(e)=>{tempjson.educationInfo.degree=e.target.value}}
        />
      </span>
      <span>
        <label>Institution Name</label>
        <input
        type="text"
        onChange={(e)=>{tempjson.educationInfo.institutionName=e.target.value}}
        />
      </span>
      <span>
        <label>city</label>
        <input
        type="text"
        onChange={(e)=>{tempjson.educationInfo.city=e.target.value}}
        />
      </span>
      <span>
        <label>Duration</label>
        <input
        type="number"
        onChange={(e)=>{tempjson.educationInfo.courseDuration=e.target.value}}
        />
      </span>
      <span>
        <label>Grade/CGPA</label>
        <input
        type="number"
        onChange={(e)=>{tempjson.educationInfo.gradeCGPA=e.target.value}}
        />
      </span>
      <span>
        <label>Internship</label>
        <input
        type="text"
        onChange={(e)=>{tempjson.educationInfo.internship=e.target.value}}
        />
      </span>
      
      <span>
        <Link to="/signup/personalinfo">Back</Link>
        <Link to="/signup/projects">Next</Link>
      </span>
    </div>
  )
}

export default Education