import React from "react";
import { useOutletContext } from "react-router";

export default function HostPhotos(){

    const data = useOutletContext()

    const Style = {
        width: "100px",
        borderRadius: "5px",
        margin: "20px 10px"
    }

    return(
        <div>
            <img style={Style} src={data.imageUrl} alt="van image" />
        </div>
    )
}