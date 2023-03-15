import React from "react";
// import { PhoneIcon } from "@heroicons/react/24/solid";

const Header = ({ chat }) => {
  return (
    <div>
      <h3>{chat.title}</h3>

      {chat.description !== "⬅️⬅️⬅️" ?
      (<p>{chat.description}</p> ):
      ( <p>no chat selected</p> )
      }
      
    </div>
  );
};

export default Header;
