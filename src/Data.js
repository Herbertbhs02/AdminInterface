import React from 'react';
import './Data.css';
const Data = (props) =>{
  

  const zx = props.current.map(  (appName) => {
    var Active = props.num[appName].activeOrigins
    var Inactive = props.num[appName].inactiveOrigins
    var disabled = props.num[appName].disabledOrigins
   
    var activeMap =Active.map((origins)=><table ><tr className='active'><td>{origins.id}</td><td>{origins.host}</td><td>Active</td> <button onClick={(e)=>{props.dis(origins.host)}}>Disable</button></tr></table>) 
    var inactiveMap = Inactive.map((origins)=><table><tr className='inactive'><td>{origins.id}</td><td>{origins.host}</td><td>Inactive</td> <button onClick={(e)=>{props.dis(origins.host)}}>Disable</button ></tr></table>)
    var disableMap = disabled.map((origins)=><table><tr className='inactive'><td>{origins.id}</td><td>{origins.host}</td><td>Disabled</td> <button onClick={(e)=>{props.enable(origins.host)}}>Enable</button></tr></table>)
  
    return <fieldset><legend>{appName}</legend> {activeMap}{inactiveMap}{disableMap}</fieldset>

    }  )
      
 // const combined = (props.filter=='')?<div>{ActiveMap}{InactiveMap}</div>:(props.filter=='ac')?<div>{ActiveMap}</div>:(props.filter=='in')?<div>{InactiveMap}</div>:<div>Enter more charactor</div>
 
    return (  
    
    <div className='data'>
    {zx}
      
    </div>
  )  
}
  export default Data;

