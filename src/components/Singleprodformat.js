import React from "react"
import {Link} from "react-router-dom"
import {ProductConsumer} from "./context"

function SingleItem(props)
{
    return(
        <div className="col-lg-3 col-md-4 col-sm-4 col-10 productdispaly" style={{marginTop:"4%",marginLeft:"4%",marginRight:"4%",backgroundColor:"whitesmoke"}}>
            <br></br>
            <div className="text-center imagedisplay"><Link to={`/details/${props.obj.id}`} exact><img src={require(__dirname+`\/`+props.obj.img)} style={{width:"102%"}}/></Link></div>
            <ProductConsumer>
                {(object)=>{
                    return (<button disabled={object.products[props.obj.id-1].inCart} className="btn btn-outline-info atcdisplay" onClick={()=>{object.atcfunction(props.obj.id);object.modalopen(props.obj.id)/*to set modal true and pass the id*/;}}>
                            {object.products[props.obj.id-1].inCart?"InCart":<span className="fas fa-cart-plus"></span>}
                        </button>)
                }}
            </ProductConsumer>
            <div className="row">
                <div className="col-8"><Link to={`/details/${props.obj.id}`} exact>{props.obj.title}</Link></div>
                <div className="col-4 text-right">$<i>{props.obj.price}</i></div>
            </div>
        </div>
    )
}

export default SingleItem
