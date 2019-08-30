import React from "react"
import {ProductConsumer} from "./context"
import Carteachitem from "./carteactitem"

function Test()
{
    return(
        <React.Fragment>
            <br/><br/>
            <div className="row" style={{marginTop:"2%",marginBottom:"2%"}}><div className="col text-title text-blue text-center">YOUR CART</div></div>
            <ProductConsumer>
                {(object)=>{
                    let flag=0;
                    let allitems=object.products.map((item)=>{
                        if(item.inCart==true)
                        {flag=1;return(<Carteachitem key={item.id} obj={item}/>)}
                        else
                        {return null}
                    })
                    if(flag===0)
                    {
                        return(
                            <div className="row"><div className="col text-title text-center text-blue">EMPTY!!HURRY AND GRAB OUR EXCITING PRODUCTS</div></div>
                        )
                    }
                    return(
                        <React.Fragment>
                            <div className="row">
                                <div className="col-1 text-center text-blue" style={{marginLeft:"7%"}}><b>PRODUCT</b></div>
                                <div className="col-2 text-center text-blue" style={{marginLeft:"3%"}}><b>NAME OF PRODUCT</b></div>
                                <div className="col-1 text-center text-blue" style={{marginLeft:"3%"}}><b>PRICE</b></div>
                                <div className="col-2 text-center text-blue" style={{marginLeft:"3%"}}><b>QUANTITY</b></div>
                                <div className="col-1 text-center text-blue" style={{marginLeft:"3%"}}><b>REMOVE</b></div>
                                <div className="col-2 text-center text-blue" style={{marginLeft:"3%"}}><b>ITEM TOTAL</b></div>
                            </div>
                            {allitems}
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 text-right" style={{paddingRight:"6%"}}>
                                        <button className="btn btn-outline-danger" onClick={()=>{object.clearcart()}}>CLEAR CART</button>
                                    </div>
                                </div>    
                                <div className="row"><div className="col-12 text-right" style={{paddingRight:"4%"}}><span style={{fontSize:"20pt",fontFamily:'Permanent Marker',letterSpacing:"3px"}}><b>SUBTOTAL:{object.bill}</b></span></div></div>
                                <div className="row"><div className="col-12 text-right" style={{paddingRight:"4%"}}><span style={{fontSize:"20pt",fontFamily:'Permanent Marker',letterSpacing:"3px"}}><b>TAX:{object.bill/10}</b></span></div></div>
                                <div className="row"><div className="col-12 text-right" style={{paddingRight:"4%"}}><span style={{fontSize:"20pt",fontFamily:'Permanent Marker',letterSpacing:"3px"}}><b>TOTAL:{object.bill+object.bill/10}</b></span></div></div>
                            </div>
                            <br/><br/><br/>    
                        </React.Fragment>
                    )
                }}
            </ProductConsumer>
        </React.Fragment>
    )
}

export default Test;