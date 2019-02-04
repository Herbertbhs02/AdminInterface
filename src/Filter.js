import React from 'react'
import './Filter.css';
const Filter = (props) => {

    
  return (
    <div className='filter'>
    <fieldset>
    <legend className='legend'>Filters</legend>
    
      <label>
  
  Filter: <input type='text' onKeyUp={(e)=>{props.origins(e.target.value)}}/>
      </label>
      
  

</fieldset>

       
    </div>
  )
}

export default Filter
