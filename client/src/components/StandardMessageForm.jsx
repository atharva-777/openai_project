import React, { useState } from "react";
import {
  PaperClipIcon,
  XMarkIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import Dropzone from "react-dropzone";

const StandardMessageForm = ({ props, activeChat }) => {
  const [msg, setMsg] = useState("");
  const [attach, setAttach] = useState("");
  const [preview, setPreview] = useState("");

  const handleChange = (e) => {
    setMsg(e.target.value);
  };

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
    setMsg("");
    setAttach("");
  };

  return (
    <div className="message-form-container">
      {preview && (
        <div className="message-form-preview">
          <img
            alt="message-form-preview"
            className="message-form-preview-image"
            src={preview}
            onLoad={() => URL.revokeObjectURL(preview)}
          />
          <XMarkIcon
            className="message-form-icon-x"
            onClick={() => {
              setPreview("");
              setAttach("");
            }}
          />
        </div>
      )}

      <div className="message-form">
        <div className="message-form-input-container">
          <input
            className="message-form-input"
            type={"text"}
            value={msg}
            onChange={handleChange}
            placeholder={"send a message"}
          />
        </div>
        <div className="message-form-icons">
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png"
            multiple={false}
            noClick={true}
            onDrop={(acceptedFiles) => {
              setAttach(acceptedFiles[0]);
              setPreview(URL.createObjectURL(acceptedFiles[0]));
            }}
          >
            {({ getRootProps, getInputProps, open }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <PaperClipIcon
                  className="message-form-icon-clip"
                  onClick={open}
                />
              </div>
            )}
          </Dropzone>
          <hr />
          <PaperAirplaneIcon
            className="message-form-icon-airplane"
            onClick={() => {
              setPreview("");
              handleSubmit();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default StandardMessageForm;
