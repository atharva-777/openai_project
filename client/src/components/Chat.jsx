import React from 'react'
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";
import Header from './Header';


const Chat = () => {
    const chatPrps = useMultiChatLogic(
     import.meta.env.VITE_PROJECT_ID,
     "Atharva",
     "1234"
    )
  return (
    <div style={{flexBasis:'100%'}}>
      <MultiChatSocket {...chatPrps}/>
      <MultiChatWindow 
        {...chatPrps}
        style={{height:'97vh'} }
        renderChatHeader={(chat)=><Header chat={chat}/>}
      />
    </div>
  )
}

export default Chat