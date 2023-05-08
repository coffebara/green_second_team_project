import React from "react"
import Light_on from "./Light_off"
import Light_off from "./Light_off"



export default function Toggle({ theme, toggleTheme }) {

    return (
        <div onClick={toggleTheme}>
            {theme === 'light' ? <Light_on /> : <Light_off />}
        </div>
    )
}