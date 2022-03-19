import React from "react";
import { FiSearch } from 'react-icons/fi'

export default function Button (props) {
    return (
        <button className="search-button" onClick={props.onClick}>
            <FiSearch size={25} color="#0f0f0f"/>
        </button>
        )
}