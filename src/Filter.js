import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
  constructor(props) {
    super(props);
this.state={active:false,
            inactive:false,
            disable:false }

                     }

activechange = (e) =>{this.setState({active:!this.state.active})}                     
inactivechange = (e) =>{this.setState({inactive:!this.state.inactive})} 
disablechange = (e) =>{this.setState({disable:!this.state.disable})} 

submit = (e)=>{e.preventDefault();
  this.props.submit(this.state);
               }

  render() {

    return (
      <div className='filter'>
      <fieldset>
      <legend className='legend'>Filters</legend>
      

        <form onSubmit={this.submit}>
         <input type="checkbox" name="active" value={this.state.active} onChange={this.activechange}/><span>Active</span>
         <input type="checkbox" name="inactive" value={this.state.inactive} onChange={this.inactivechange}/><span>Inactive</span>
         <input type="checkbox" name="disable" value={this.state.disable} onChange={this.disablechange}/><span>Disable</span>
         <button>Submit</button>
        </form>
        </fieldset>
      </div>
    )
  }
}

export default Filter;
