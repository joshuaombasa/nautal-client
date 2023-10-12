import React from "react";
import { getBoats } from "../../api";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import BoatsPageBoatItem from "../../components/BoatsPageBoatItem";

export async function loader() {
    return getBoats()
}


export default function Boats() {
    const [searchParams, setSearchParams] = useSearchParams()

    function generateNewUrlSearchParams(key, value) {
       const sp = new URLSearchParams(searchParams)

       if(value === null) {
          sp.delete(key)
       } else {
        sp.set(key,value)
       }
       
       setSearchParams(sp)
    }

    // function updateSearchParams(key, value) {
    //     setSearchParams(prevSearchParams => {
    //         if (!value) {
    //             prevSearchParams.delete(key)
    //         } else {
    //             prevSearchParams.set(key,value)
    //         }
    //         return prevSearchParams
    //     })
    // }


    const boats = useLoaderData()

    const typeFilter = searchParams.get("type")

    const filteredBoats = typeFilter ? boats.filter(boat => boat.type === typeFilter) : boats

    const boatElements = filteredBoats.map(boat => (
        <BoatsPageBoatItem 
            key={boat.id} boat={boat} 
            typeFilter={typeFilter}
            searchParams={searchParams.toString()}
        />
    ))
    return (
        <div className="boats--page">
            <h1>This is boats page</h1>
            <nav className="filter--nav">
                <button
                   onClick={() => generateNewUrlSearchParams("type", "lite")} 
                >Lite</button>
                <button
                   onClick={() => generateNewUrlSearchParams("type", "executive")} 
                >Executive</button>
                <button
                   onClick={() => generateNewUrlSearchParams("type", "luxury")} 
                >Luxury</button>
                <button
                className="clear--filter--btn"
                   onClick={() => generateNewUrlSearchParams("type", null)} 
                >Clear Filters</button>
            </nav>
            <div className="boats--page--container">
                {boatElements}
            </div>
        </div>
    )
}