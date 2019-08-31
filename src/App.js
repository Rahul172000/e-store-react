import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Route from "react-router-dom/Route"
import Allprod from "./components/Allprod"
import Cart from "./components/cart"
import {Link,Switch} from "react-router-dom"
import Invalid from "./components/invalid"
import logo from "./logo.svg"
import Details from "./components/details"
import {ProductConsumer} from "./components/context"

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

function App()
{
  return(
    <React.Fragment>{/*The enclosing element and thus we don't use any extra element*/}
      <div className="row header" style={{backgroundColor:"#2a2a72",height:"8%",marginBottom:"10%"}}>
        <ProductConsumer>
          {(object)=>{
            return(
              <React.Fragment>
                <div className="col-lg-2 col-md-2 col-sm-2 col-2 text-center" style={{marginTop:"0.4%",height:"8%"}}><Link to="/"><img src={logo} onClick={()=>{object.modalclose();}}/></Link></div>
                <div className="col-1" style={{marginTop:"0.8%",height:"8%"}}><Link to="/" exact strict><span style={{color:"#f3f3f3",fontSize:"15pt"}} onClick={()=>{object.modalclose();}}>PRODUCTS</span></Link></div>
                <div className="col-lg-6 col-md-6 col-sm-5 col-4" style={{height:"5%"}}></div>
                <div className="col-lg-2 col-md-3 col-sm-3 col-4" style={{marginTop:"0.8%",marginBottom:"9%"}}><Link to="/cart" exact strict><button className="btn btn-outline-info" onClick={()=>{object.modalclose();}}><span className="fas fa-shopping-cart"></span> MY CART</button></Link></div>
              </React.Fragment>
            )
          }}
        </ProductConsumer>    
      </div>  {/*This part will always be displayed in the page and when we click the products or my cart option then only the rest of the page chnages and the header remains intact coz only that route is rendered and not whole page is rendered again*/}
      <Switch>
        <Route path="/" exact strict render={()=>{
          return(<Allprod/>)
        }}/>
        <Route path="/cart" exact strict render={()=>{
          return(<Cart/>)
        }}/>
        <Route path="/details/:id" exact strict render={(url)=>{
          return(<Details id={url.match.params.id}/>)      
        }}/>  
        <Route render={()=>{//since this does not have any path so it will always be rendered so we include the routes in switch which renders only one jsx file even if there are multiple paths which match,only the first macthing path jsx component is rendered
          return(<Invalid/>)
        }}/>
      </Switch>
    </React.Fragment>
  )
}

export default App;
