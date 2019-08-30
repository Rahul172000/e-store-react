import React from "react"
import {Link} from "react-router-dom"

function Invalid()
{
    return(
        <div>
            <br/><br/><br/><br/><br/><br/>
            <h1 className="text-center">OOPS,PAGE NOT FOUND</h1>
            <Link to="/" exact strict><h2 className="text-center">GO TO HOMEPAGE</h2></Link>
        </div>
    )
}

export default Invalid