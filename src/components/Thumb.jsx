import React from "react";
import { useState } from "react";

export default function Thumb(props) {
  const [file, setFile] = useState();
  const [name, setName] = useState();

  if (!this.state.file) return null;

  return (
    <img
      src={file}
      alt={name}
      className="img-thumbnail mt-2"
      height={200}
      width={200}
    />
  );
}
