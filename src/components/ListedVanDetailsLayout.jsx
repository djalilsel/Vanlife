import React, { useState, useEffect} from "react";
import { Outlet } from "react-router";
import { useParams, Link, NavLink } from "react-router-dom";
import ListedVanDetails from "../pages/Host/ListedVanDetails";
import './ListedVanDetailsLayout.css'

export default function ListedVanDetailsLayout(){

    const param = useParams()

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`/api/host/vans/${param.id}`)
        .then(res => res.json())
        .then(datas => setData(datas.vans[0]))
    }, [param.id])
    
    const activeLink ={
        textDecoration: "underline",
        fontSize: "1.12rem"
    }

    return(
        <div>
            <Link className="backtolistedvans" to='../vans' >
                <span style={{paddingLeft: "10px", fontSize: "1rem"}}>&larr;</span> <span className="backtolistedvans--text">Back to all vans</span>
            </Link>
            <div className="ListedVanDetailsLayout--container">
                <div>
                    <ListedVanDetails
                    type={data.type}
                    id={data.id}
                    name={data.name}
                    imageUrl={data.imageUrl}
                    price={data.price}
                    />
                </div>
                <nav>
                    <NavLink
                    className="hostvandetails--navigation"
                    end
                    style={({isActive}) => isActive ? activeLink : null}
                    to=".">
                        Details
                    </NavLink>
                    <NavLink
                    className="hostvandetails--navigation"
                    style={({isActive}) => isActive ? activeLink : null}
                    to="pricing">
                        Pricing
                    </NavLink>
                    <NavLink
                    className="hostvandetails--navigation"
                    style={({isActive}) => isActive ? activeLink : null}
                    to="photos">
                        Photos
                    </NavLink>
                </nav>
                <Outlet context={[data, setData]}/>
            </div>
        </div>
    )
}