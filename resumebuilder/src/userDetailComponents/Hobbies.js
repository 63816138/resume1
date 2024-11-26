import React from 'react'
import { Link } from 'react-router-dom'

const Hobbies = ({tempjson}) => {
  return (
    <div className='user_details'>
      <h3>Hobbies & Languages</h3>
      <span>
        <label>Personal Intrest</label>
        <input/>
        <button>+</button>
      </span>
      <span>
        <label>Language Known</label>
        <input/>
        <button>+</button>
      </span>
      
      <span>
        <Link to="/signup/skills">Back</Link>
        <Link to="/login">Next</Link>
      </span>
    </div>
  )
}

export default Hobbies