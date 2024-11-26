import React from 'react'
import { Link } from 'react-router-dom'

const Skills = ({tempjson}) => {
  return (
    <div className='user_details'>
      <h3>Skills</h3>
      <span>
        <label>Technical Skills</label>
        <input
        type='text'
        id='techskill'
        />
        <button onClick={()=>{
          const tech=document.getElementById('#techskill');
          tempjson.skills.technicalSkill.push(tech.value);
          console.log(tempjson.Skills.technicalSkill)
        }}>+</button>
      </span>
      <span>
        <label>Soft Skills</label>
        <input/>
        <button>+</button>
      </span>
      
      <span>
        <Link to="/signup/projects">Back</Link>
        <Link to="/signup/hobbies">Next</Link>
      </span>

    </div>
  )
}

export default Skills