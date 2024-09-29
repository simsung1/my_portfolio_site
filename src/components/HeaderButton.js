import React from "react";

function HeaderButton({text}) {
  return (
    <a href={`#${text.toLowerCase()}`} className="text-white hover:text-green-300">{text}</a>
  );
}

export default HeaderButton;