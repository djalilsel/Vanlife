import React from "react";
import { useOutletContext } from "react-router";

export default function HostPricing(){

    const Style = {
        padding: "20px 10px",
        fontFamily: "'Inter', sans-serif",
        fontWeight: "bolder",
        fontSize: "1.2rem"
    }


    const data = useOutletContext()

    return(
        <div style={Style}>
            ${data.price}.00<span style={{fontSize: "0.8rem"}}>/day</span>
        </div>
    )
}