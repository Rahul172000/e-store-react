import React from "react"
import {Link} from "react-router-dom"
import Modal from "./modal"
import {ProductConsumer} from "./context"

class Details extends React.Component
{
    /*constructor(props)
    {
        super();
        this.state=
        {
            id: props.obj.id,
            title: props.obj.title,
            img: props.obj.img,
            price: props.obj.price,
            company: props.obj.company,
            info:props.obj.info,
            inCart: props.obj.inCart,
            count: props.obj.count,
            total: props.obj.total 
        }
    }*/
    render(props)
    {
        return(
            <ProductConsumer>
                {(object)=>{
                    let index=this.props.id-1;
                    return(
                        <div className="container">
                            <br/><br/><br/><br/><br/>
                            <div className="row"><div className="col text-blue text-center" style={{fontSize:"30pt"}}><b>{object.products[index].title}</b></div></div>
                            <hr/>
                            <div className="row">
                                <div className="col-lg-6 text-center"><img src={require(__dirname+`\/`+object.products[index].img)}/></div>
                                <div className="col-lg-5 text-center" style={{fontSize:"15pt",marginTop:"3%"}}>
                                    <div className="text-center" style={{fontSize:"25pt"}}><b>MODEL:{object.products[index].title}</b></div>
                                    <div className="text-center text-blue" style={{fontSize:"20pt",fontFamily:"Permanent Marker",marginTop:"10px",marginBottom:"10px"}}><b>MADE BY:{object.products[index].company}</b></div>
                                    <div style={{marginBottom:"10px"}}><h2><span className="badge badge-info">&nbsp;&nbsp;PRICE: ${object.products[index].price}&nbsp;&nbsp;</span></h2></div>
                                    <p style={{letterSpacing:"0.05rem"}}>{object.products[index].info}</p>
                                    <br/>
                                    <Link to="/" exact><button className="btn btn-outline-warning btn-lg">PRODUCTS</button></Link>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <ProductConsumer>
                                        {(object)=>{
                                            return(
                                                <button className="btn btn-outline-info btn-lg" disabled={object.products[index].inCart} onClick={()=>{object.atcfunction(object.products[index].id);object.modalopen(object.products[index].id);/*this to set modal to true and pass the object id*/}}>{object.products[index].inCart?"ALREADY IN CART":"ADD TO CART"}</button>
                                            )
                                        }}
                                    </ProductConsumer>
                                </div>
                            </div>
                            <br/><br/>
                            <Modal/>{/*Always returned so when false modal returns null*/}
                        </div>
                    )    
                }}
            </ProductConsumer>        
        )
    }
}

export default Details