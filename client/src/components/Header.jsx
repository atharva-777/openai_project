import React from 'react'
import {PhoneIcon} from '@heroicons/react/24/solid'

const Header = ({chat}) => {
  return (
    <div>
        <h3>Chat - {chat.title}</h3>
        <div>{chat.description}</div>
        <PhoneIcon style={{height:'37px'}}/>
    </div>
  )
}

export default Header