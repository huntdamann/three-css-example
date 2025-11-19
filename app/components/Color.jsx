
import React from "react"

export default function Color({ color, icon }) {
    return (
        <>


            <button className="color-button" style={{ backgroundColor: color, fontSize: "1.5rem" }}>
                {icon}
            </button>


        </>
    )
}