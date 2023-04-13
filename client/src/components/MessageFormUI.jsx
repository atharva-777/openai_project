import React, { useState } from "react";
import {
  PaperClipIcon,
  XMarkIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import Dropzone from "react-dropzone";

const MessageFormUI = ({setAttach,msg,setMsg,handleSubmit}) => {

    const [preview,setPreview] = useState("")

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
            onChange={(e) => setMsg(e.target.value)}
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

export default MessageFormUI;
