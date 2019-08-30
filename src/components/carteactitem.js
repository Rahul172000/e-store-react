import React from "react"
import {ProductConsumer} from "./context"
import {Link} from "react-router-dom"

function Carteachitem(props)
{
    return(
        <ProductConsumer>
            {(object)=>{
                return(
                    <div className="row border" style={{marginTop:"2%",marginBottom:"2%"}}>
                        <div className="col-1 text-center" style={{marginLeft:"7%"}}>
                            <Link to={`/details/${props.obj.id}`} exact><img src={require(__dirname+`\/`+props.obj.img)} style={{width:"150%"}}/></Link>
                        </div>
                        <div className="col-2 text-center text-blue" style={{marginTop:"2%",marginLeft:"3%"}}>
                            <Link to={`/details/${props.obj.id}`} exact><span style={{letterSpacing:"1px"}}><b>{props.obj.title}</b></span></Link>
                        </div>
                        <div className="col-1 text-center" style={{marginTop:"2%",marginLeft:"3%"}}><b>${props.obj.price}</b></div>
                        <div className="col-2 text-center" style={{marginTop:"2%",marginLeft:"3%"}}>
                            <button className="btn btn-outline-dark" onClick={()=>{object.minus(props.obj.id)}}><span className="fas fa-minus"></span></button>
                            &nbsp;&nbsp;
                            <button className="btn btn-outline-dark" disabled>{props.obj.count}</button>
                            &nbsp;&nbsp;
                            <button className="btn btn-outline-dark" onClick={()=>{object.plus(props.obj.id)}}><span className="fas fa-plus"></span></button>
                        </div>
                        <div className="col-1 text-center" style={{marginTop:"2%",marginLeft:"3%"}}>
                            <button className="btn btn-outline-warning" onClick={()=>{object.dustbin(props.obj.id)}}><span className="fas fa-trash"></span></button>
                        </div>
                        <div className="col-2 text-center" style={{marginTop:"2%",marginLeft:"3%"}}><b>ITEM TOTAL:${props.obj.total}</b></div>
                    </div>
                ) 
            }}
        </ProductConsumer>
    )
}

export default Carteachitem;