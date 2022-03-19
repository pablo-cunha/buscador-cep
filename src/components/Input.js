import React from "react";
import Button from "./Button";

export default function Input (props) {
    return (
        <div className="input-container">
        <input
        type={props.text}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        />
        <Button onClick={props.onClick}/>
      </div>
    )
}