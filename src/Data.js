import React from 'react';
import './Data.css';
const Data = (props) =>{
    
	
	   // const Active = props.Active.map((origins)=><div><span className='map'>{origins.id}</span><span className='map'>{origins.host}</span> <span className='map'>Active</span> <button>Disable</button></div>)
 
  const activeMap = props.Active.map((origins)=><table ><tr className='active'><td>{origins.id}</td><td>{origins.host}</td><td>Active</td> <button>Disable</button></tr></table>)
 const inactiveMap = props.Inactive.map((origins)=><table><tr className='inactive'><td>{origins.id}</td><td>{origins.host}</td><td>Inactive</td> <button>Enable</button></tr></table>)
 
  
 // const combined = (props.filter=='')?<div>{ActiveMap}{InactiveMap}</div>:(props.filter=='ac')?<div>{ActiveMap}</div>:(props.filter=='in')?<div>{InactiveMap}</div>:<div>Enter more charactor</div>


	
    return (
        
    <div className='data'>
    <fieldset>
          <legend>{props.app}</legend>
        {activeMap}
        {inactiveMap}

      
    </fieldset>
    
    </div>
  )}
  export default Data;

