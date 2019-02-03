import React from 'react';
import './Data.css';
const Data = (props) =>{
    
	
	   // const Active = props.Active.map((origins)=><div><span className='map'>{origins.id}</span><span className='map'>{origins.host}</span> <span className='map'>Active</span> <button>Disable</button></div>)
 
  const Active = props.Active.map((origins)=><table ><tr className='active'><td>{origins.id}</td><td>{origins.host}</td><td>Active</td> <button>Disable</button></tr></table>)
 const Inactive = props.Inactive.map((origins)=><table><tr className='inactive'><td>{origins.id}</td><td>{origins.host}</td><td>Inactive</td> <button>Enable</button></tr></table>)
  
  const combined = <div>{Active}{Inactive}</div>


	
    return (
        
    <div className='data'>
    <fieldset>
          <legend>{props.app}</legend>
		    {combined}
    </fieldset>
    
    </div>
  )}
  export default Data;

