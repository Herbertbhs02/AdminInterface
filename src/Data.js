import React from 'react';
import './Data.css';
const Data = (props) =>{
  //var i = props.size;
 console.log(props.size)
 var b=[]
 var c=[]
 var h=[]
 for(let i=0;i<props.size;i++){
 var Active = props.num[props.current[i]].activeOrigins
 var Inactive = props.num[props.current[i]].inactiveOrigins
  h[i]=props.current[i]
  var activeMap =Active.map((origins)=><table ><tr className='active'><td>{origins.id}</td><td>{origins.host}</td><td>Active</td> <button>Disable</button></tr></table>) 
  var inactiveMap = Inactive.map((origins)=><table><tr className='inactive'><td>{origins.id}</td><td>{origins.host}</td><td>Inactive</td> <button>Enable</button></tr></table>)
 b[i]=activeMap; c[i]=inactiveMap }
      
 // Active={this.state['Shopping-App'].activeOrigins}
 // const combined = (props.filter=='')?<div>{ActiveMap}{InactiveMap}</div>:(props.filter=='ac')?<div>{ActiveMap}</div>:(props.filter=='in')?<div>{InactiveMap}</div>:<div>Enter more charactor</div>

 

    return (
        
    <div className='data'>
      <fieldset>
          <legend>{h[0]}</legend> 
          {b[0]}
          {c[0]}
      </fieldset>
    
      <fieldset>
          <legend>{h[1]}</legend> 
           {b[1]}
           {c[1]}
      </fieldset>

      <fieldset>
          <legend>{h[2]}</legend> 
           {b[2]}
           {c[2]}
      </fieldset>
       
    </div>
  )}
  export default Data;

