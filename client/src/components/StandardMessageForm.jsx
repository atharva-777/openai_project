import React, { useState } from "react";
import { PaperClipIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Dropzone from "react-dropzone";

const StandardMessageForm = (props) => {
  const [msg, setMsg] = useState("");
  const [attach, setAttach] = useState("");
  const [preview, setPreview] = useState("");

  const handleChange = (e) => {
    setMsg(e.target.value);
  };

  return (
    <div className="message-form-container">
      {preview && (
        <div className="message-form-preview">
          <img
            src={preview}
            alt="here"
            className="message-form-preview"
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
      <div className="message-from">
        <div className="message-from-input-container">
          <input
            className="message-form-input"
            type={"text"}
            value={msg}
            onChange={handleChange}
            placeholder={"send a message "}
          />
        </div>
        <div className="message-form-icons">
          {/* <Dropzone
            acceptedFiles=".jpg,.jpeg,.png"
            multiple={false}
            noClick={true}
            onDrop={(acceptedFiles) => {
              setAttach(acceptedFiles[0]);
              setPreview(URL.createObjectURL(acceptedFiles[0]))
            }}
          >
            {({getRootProps,getInputProps,open})=>{
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <PaperClipIcon className="message-form-icon-click" onClick={open}/>
              </div>
            }}
            </Dropzone> */}
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
        </div>
      </div>
    </div>
  );
};

export default StandardMessageForm;
