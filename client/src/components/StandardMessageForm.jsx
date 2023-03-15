import React, { useState } from 'react'

const StandardMessageForm = (props) => {

    const {message,setMessage} = useState("");
    const {attach,setAttach} = useState("");

  return (
    <div className='message-form-container'>Standard Message Form</div>
  )
}

export default StandardMessageForm