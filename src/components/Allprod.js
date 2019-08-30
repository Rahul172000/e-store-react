import React from "react"
import SingleItem from "./Singleprodformat"
import Modal from "./modal"
import {ProductConsumer} from "./context"

function Allprod()
{
    return(
        <div className="container">
            <br/><br/>
            <div className="row" style={{marginTop:"4%"}}><div className="col text-title text-blue text-center">OUR products</div></div>
            <div className="row">
                <ProductConsumer>
                    {(object)=>{
        //enclose the function in consumer tag...function that performs logical operations on data acquired from provider and returns jsx component and object recieves the contents of value in provider in it
                        let Allitems=object.products.map((item)=>{
                            return(<SingleItem key={item.id} obj={item}/>)
                        })
                        return(
                            <React.Fragment>{Allitems}</React.Fragment>
                        )
                    }}
                </ProductConsumer>
            </div>
            <br/><br/>
            <Modal/>{/*Always displayed so when false modal return null*/}
        </div>
    )
}
export default Allprod