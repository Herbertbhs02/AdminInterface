import React, { Component } from 'react';
import Data from './Data';
//import Filter from './Filter'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
		this.state={ response:{
      "shopping" : {
        "appId" : "shopping",
        "activeOrigins" : [ {
          "id" : "shopping-01xx",
          "host" : "origins-server:8083"
        }, {
          "id" : "shopping-02",
          "host" : "origins-server:8084"
        }, {
          "id" : "shopping-03",
          "host" : "origins-server:8085"
        }, {
          "id" : "shopping-04",
          "host" : "origins-server:8086"
        }, {
          "id" : "shopping-05",
          "host" : "origins-server:8087"
        } ],
        "inactiveOrigins" : [ ],
        "disabledOrigins" : [ ]
      },
      "landing" : {
        "appId" : "landing",
        "activeOrigins" : [ {
          "id" : "landing-01",
          "host" : "origins-server:8081"
        }, {
          "id" : "landing-02yy",
          "host" : "origins-server:8082"
        } ],
        "inactiveOrigins" : [ ],
        "disabledOrigins" : [ ]
      },
      "api-server" : {
        "appId" : "api-server",
        "activeOrigins" : [ {
          "id" : "api-server-01",
          "host" : "origins-server:8088"
        } ],
        "inactiveOrigins" : [ ],
        "disabledOrigins" : [ ]
      }
    },
									current:['shopping','landing'],
									
                 }

  }

   componentDidMount() {
    var url ='http://styxdemo.greyfire.co.uk:9000/admin/origins/status?pretty'
    
    fetch(url)
    .then(response => response.json())
     .then((data)=>{ this.setState({response:data,current: Object.keys(data),len:this.state.current.length})})  }   
	  
	
   // origins = (e)=>{this.setState({filter:e})}
    // Active={this.state['Shopping-App'].activeOrigins} Inactive={this.state['Shopping-App'].inactiveOrigins} app={this.state['Shopping-App'].appId} filter={this.state.filter}
    // Active={this.state['Landing-App'].activeOrigins} Inactive={this.state['Landing-App'].inactiveOrigins} app={this.state['Landing-App'].appId} filter= {this.state.filter}
   // const activeMap = Object.values(props.Active).map((app)=><div>{app.activeOrigins[0].id}{app.activeOrigins[0].host} {app.activeOrigins.length}</div>)
 // const map = Object.keys(this.state.response).map((app)=><div>{app.activeOrigins[0].id}{app.activeOrigins[0].host} {app.activeOrigins.length}</div>)
  //  <Data Active={this.state.response.shopping.activeOrigins} Inactive={this.state.response.shopping.inactiveOrigins} app={this.state.response.shopping.appId} />
// <Filter origins={this.origins}/>
  render() {
    
	 
    return (
      <div className="App">
		    <div className='header'><h2>Styx Origins Dashboard</h2></div>
			      <Data num={this.state.response} current={this.state.current} size ={this.state.current.length}/>
		  </div>
	  );
		} 
}
export default App;
