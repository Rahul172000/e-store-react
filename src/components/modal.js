import React from "react"
import {ProductConsumer} from "./context"
import {Link} from "react-router-dom"

function Modal()
{
    return(
        <ProductConsumer>
            {(object)=>{
                let index=object.modalopenid-1;
                if(object.modalopencheck===false)
                {return null;}//if false then nothing displayed so returned null
                else
                {
                    return(
                        <React.Fragment>
                            <div style={{boxShadow:"0.08rem 0.08rem 0.08rem 0.08rem silver",backgroundColor:"white",position:"fixed",bottom:"5%",left:"35%"}}>
                                <br/>
                                <div className="row"><div className="col-12 text-center"><b>ITEM ADDED TO CART</b></div></div>
                                <div className="row"><div className="col-12 text-center"><img src={require(__dirname+`\/`+object.products[index].img)}/></div></div>
                                <div className="row"><div className="col-12 text-center"></div></div>
                                <div className="row"><div className="col-12 text-center" style={{marginTop:"0.6%"}}><b>{object.products[index].title}</b></div></div>
                                <div className="row"><div className="col-12 text-center" style={{marginTop:"0.6%"}}><b>PRICE:{object.products[index].price}$</b></div></div>
                                <div className="row"><div className="col-12 text-center" style={{marginTop:"0.6%"}}><Link to="/" exact><button className="btn btn-outline-info" onClick={()=>{object.modalclose()/*to close the modal once the link from modal is slected*/;}}>CONTINUE SHOPPING</button></Link></div></div>
                                <div className="row"><div className="col-12 text-center" style={{marginTop:"0.6%"}}><Link to="/cart" exact><button className="btn btn-outline-warning" onClick={()=>{object.modalclose()/*to close the modal once the link from modal is slected*/;}}>GO TO CART</button></Link></div></div>
                                <br/>
                            </div>
                        </React.Fragment>
                    )
                }    
            }}
        </ProductConsumer>
    )
}

export default Modal;