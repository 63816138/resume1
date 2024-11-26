import React from 'react';
import {Link} from 'react-router-dom';

const Project = ({tempjson}) => {
  const techadd= ()=>{
    const val =  document.getElementById("techused");
    tempjson.projectInfo.technologiesUsed=[...tempjson.projectInfo.technologiesUsed,val.value];
    console.log(tempjson);
  }
  return (
    <div className="project user_details">
      <h3>Project Details</h3>
      <span>
        <label>Project Title</label>
        <input
        type='text'
        onChange={(e)=>{tempjson.projectInfo.projectTitle=e.target.value}}
        />
      </span>
      <span>
        <label>Project Description</label>
        <textarea
        type="text"
        onChange={(e)=>{tempjson.projectInfo.projectDescription=e.target.value}}
        ></textarea>
      </span>
      <span>
        <label>Technology used</label>
        <input
        type="text"  
        id="techused"
        />
        <button onClick={techadd}>+</button>
      </span>
      <span>
        <label>Github Link</label>
        <input
        type="url"
        onChange={(e)=>{tempjson.projectInfo.githubLink=e.target.value}}
        />
      </span>
      <span>
        <label>Time Duration</label>
        <input
        type="number"
        onChange={(e)=>{tempjson.projectInfo.duration=e.target.value}}
        />
      </span>
      
      <span>
        <Link to="/signup/education">Back</Link>
        <Link to="/signup/skills">Next</Link>
      </span>
    </div>
  )
}

export default Project