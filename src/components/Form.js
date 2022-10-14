import './FormStyles.css'

import React from 'react'

const Form = () => {
  return (
    <div className='Form'>
        <form>
            <label>Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea row="6" placeholder='Type your message here'/>
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form