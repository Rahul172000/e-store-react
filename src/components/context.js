
//context api file which make only one state for whole react app and make that state available in every component file and the data 
//from files or database used in only context api file

import React from "react"
import data from "./data"

const ProductContext=React.createContext();  ///no packages needed,its inbuilt in react
//Provider
//Consumer


class ProductProvider extends React.Component
{
    constructor()
    {
        super();
        this.state={
            products:data,
            final:0,
            modalopen:false,//to show modal
            modalproductid:0//which product to show on modal window
        }
        this.addtocarthandler=this.addtocarthandler.bind(this);
        this.increasequan=this.increasequan.bind(this);
        this.decreasequan=this.decreasequan.bind(this);
        this.removeone=this.removeone.bind(this);
        this.clearcart=this.clearcart.bind(this);
        this.modalclose=this.modalclose.bind(this);
        this.modalopen=this.modalopen.bind(this);
    }

    addtocarthandler(id)
    {
        this.setState((prevstate)=>{
            let temp=prevstate.products;
            temp[id-1].inCart=true;
            temp[id-1].count=1;
            temp[id-1].total=temp[id-1].price;
            let final=prevstate.final+temp[id-1].price;
            return({products:temp,final:final})
        })
    }

    increasequan(id)
    {
        this.setState((prevstate)=>{
            let temp=prevstate.products;
            temp[id-1].count++;
            temp[id-1].total=temp[id-1].price*temp[id-1].count;
            let final=prevstate.final+temp[id-1].price;
            return({products:temp,final:final});
        })
    }

    decreasequan(id)
    {
        this.setState((prevstate)=>{
            let temp=prevstate.products;
            temp[id-1].count--;
            let final=prevstate.final-temp[id-1].price;
            if(temp[id-1].count===0)
            {temp[id-1].inCart=false;}
            temp[id-1].total=temp[id-1].price*temp[id-1].count;
            return({products:temp,final:final});
        })
    }

    removeone(id)
    {
        this.setState((prevstate)=>{
            let temp=prevstate.products;
            temp[id-1].inCart=false;
            let final=prevstate.final-temp[id-1].total;
            return({products:temp,final:final})
        })
    }

    clearcart()
    {
        let temp=data;
        for(let i of temp)
        {i.inCart=false}
        let final=0;
        this.setState({products:temp,final:final});
    }

    modalopen(id)
    {
        this.setState({modalopen:true,modalproductid:id});
    }

    modalclose()
    {
        this.setState({modalopen:false,modalproductid:0});
    }

    render(props)
    {
        //always in same format
        return(
            <ProductContext.Provider value={{modalopencheck:this.state.modalopen,modalopenid:this.state.modalproductid,bill:this.state.final,products:this.state.products,atcfunction:this.addtocarthandler,plus:this.increasequan,minus:this.decreasequan,dustbin:this.removeone,clearcart:this.clearcart,modalopen:this.modalopen,modalclose:this.modalclose}}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
//provider for providing the data and used to enclose whole code in index.js
//consumer for using the data which is included in value attribute of proivder in diff components
//eg of consumer explained in allprod file...
const ProductConsumer=ProductContext.Consumer;

export {ProductConsumer,ProductProvider};