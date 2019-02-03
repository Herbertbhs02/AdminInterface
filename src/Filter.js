import React from 'react'
import './Filter.css';
const Filter = () => {
  return (
    <div className='filter'>
    <fieldset>
    <legend className='legend'>Filters</legend>
    
      <label>
  <input type="checkbox"/>
  origin name:<input type='text'/>
      </label>
      
  <input type="checkbox" name="gender" value="male"/><label>active</label> 
  <input type="checkbox" name="gender" value="male"/><label>inactive</label>
  <input type="checkbox" name="gender" value="male"/><label>disabled</label>

</fieldset>

       
    </div>
  )
}

export default Filter
