import React from "react";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";
import Header from "./Header";
import StandardMessageForm from "./StandardMessageForm";

const Chat = () => {
  const chatPrps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    "testuser",
    "1234"
  );
  return (
    <div style={{ flexBasis: "100%" }}>
      <MultiChatSocket {...chatPrps} />
      <MultiChatWindow
        {...chatPrps}
        style={{ height: "100vh" }}
        renderChatHeader={(chat) => <Header chat={chat} />}
        // renderMessageForm={(props)=>{
        //   return(
        //     <StandardMessageForm props={props} activeChat = { chatPrps.chat}/>
        //     )
        //   }}  
      />
    </div>
  );
};

export default Chat;
