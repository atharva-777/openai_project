import {React,useState} from "react";
import MessageFormUI from "./MessageFormUI";
import { usePostAiTextMutation } from "../store/api";

const Ai = ({props,activeChat}) => {

    const [msg, setMsg] = useState("");
    const [attach, setAttach] = useState("");
    const [trigger] = usePostAiTextMutation()

    const handleSubmit = async () => {
      const date = new Date()
        .toISOString()
        .replace("T", " ")
        .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`);
      const at = attach ? [{ blob: attach, file: attach.name }] : [];
      const form = {
        attachments: at,
        created: date,
        sender_username: props.username,
        text: msg,
        activeChatId: activeChat.id,
      };

      props.onSubmit(form);
      trigger(form)
      setMsg("");
      setAttach("");
    };
  return (
    <MessageFormUI
      setAttach={setAttach}
      setMsg={setMsg}
      msg={msg}
      handleSubmit={handleSubmit}
    />
  );
};

export default Ai;
