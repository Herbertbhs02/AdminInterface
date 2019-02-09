import React from 'react';
import './Data.css';
const Data = (props) =>{
  //var i = props.size;

 var b=[]
 var c=[]
 var h=[]
 var d=[]
 for(let i=0;i<props.size;i++){
 var Active = props.num[props.current[i]].activeOrigins
 var Inactive = props.num[props.current[i]].inactiveOrigins
 var disabled = props.num[props.current[i]].disabledOrigins
  h[i]=props.current[i]
  var activeMap =Active.map((origins)=><table ><tr className='active'><td>{origins.id}</td><td>{origins.host}</td><td>Active</td> <button>Disable</button></tr></table>) 
  var inactiveMap = Inactive.map((origins)=><table><tr className='inactive'><td>{origins.id}</td><td>{origins.host}</td><td>Inactive</td> <button>Enable</button></tr></table>)
  var disableMap = disabled.map((origins)=><table><tr className='inactive'><td>{origins.id}</td><td>{origins.host}</td><td>Disabled</td> <button>Enable</button></tr></table>)
 b[i]=activeMap; c[i]=inactiveMap;d[i]=disableMap }
      
 
 // const combined = (props.filter=='')?<div>{ActiveMap}{InactiveMap}</div>:(props.filter=='ac')?<div>{ActiveMap}</div>:(props.filter=='in')?<div>{InactiveMap}</div>:<div>Enter more charactor</div>

 

    return (
        
    <div className='data'>
      <fieldset>
          <legend>{h[0]}</legend> 
          {b[0]}
          {c[0]}
          {d[0]}
      </fieldset>
    
      <fieldset>
          <legend>{h[1]}</legend> 
           {b[1]}
           {c[1]}
           {d[1]}
      </fieldset>

      <fieldset>
          <legend>{h[2]}</legend> 
           {b[2]}
           {c[2]}
            {d[2]}
      </fieldset>
      
      <fieldset>
          <legend>{h[3]}</legend> 
           {b[3]}
           {c[3]}
           {d[3]}
      </fieldset>

      <fieldset>
          <legend>{h[4]}</legend> 
           {b[4]}
           {c[4]}
           {d[4]}
      </fieldset>

      <fieldset>
          <legend>{h[5]}</legend> 
           {b[5]}
           {c[5]}
      </fieldset>
      
      <fieldset>
          <legend>{h[6]}</legend> 
           {b[6]}
           {c[6]}
           {d[6]}
      </fieldset>

      <fieldset>
          <legend>{h[7]}</legend> 
           {b[7]}
           {c[7]}
           {d[7]}
      </fieldset>

      <fieldset>
          <legend>{h[8]}</legend> 
           {b[8]}
           {c[8]}
           {d[8]}
      </fieldset>

      <fieldset>
          <legend>{h[9]}</legend> 
           {b[9]}
           {c[9]}
           {d[9]}
      </fieldset>

      <fieldset>
          <legend>{h[10]}</legend> 
           {b[10]}
           {c[10]}
           {d[10]}
      </fieldset>

      <fieldset>
          <legend>{h[11]}</legend> 
           {b[11]}
           {c[11]}
           {d[11]}
      </fieldset>

      <fieldset>
          <legend>{h[12]}</legend> 
            {b[12]}
            {c[12]}
            {d[12]}
      </fieldset>

    </div>
  )}
  export default Data;

