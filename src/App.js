import React, { Component } from 'react';
import Data from './Data';
import Filter from './Filter'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
   this.state={  
		"Shopping-App" : {  
			"appId" : "Shopping-App" ,
			"activeOrigins" : [  
				{  
					"id" : "shopping-01" ,
					"host" : "somehost:80"
				} ,
				{  
					"id" : "shopping-04" ,
					"host" : "xyzxy:83"
				}
			] ,
			"inactiveOrigins" : [  
				{  
					"id" : "shopping-02" ,
					"host" : "otherhost:81"
				}
			] ,
			"disabledOrigins" : [  
				{  
					"id" : "shopping-03" ,
					"host" : "nnn-nnn:82"
				}
			]
		} ,
		"Landing-App" : {  
			"appId" : "Landing-App" ,
			"activeOrigins" : [  
				{  
					"id" : "landing-01" ,
					"host" : "somehost:80"
				} ,
				{  
					"id" : "landing-02" ,
					"host" : "xyzxy:83"
				}
			] ,
			"inactiveOrigins" : [  
				{  
					"id" : "landing-0N" ,
					"host" : "otherhost:81"
				}
			] ,
			"disabledOrigins" : [  
	
			]
		}
	}
  }
    
	

  render() {
    return (
      <div className="App">
		   <div className='header'><h2>Styx Origins Dashboard</h2></div>
		   <Filter/>
           <Data Active={this.state['Shopping-App'].activeOrigins} Inactive={this.state['Shopping-App'].inactiveOrigins} app={this.state['Shopping-App'].appId}/> 
           
		   <Data Active={this.state['Landing-App'].activeOrigins} Inactive={this.state['Landing-App'].inactiveOrigins} app={this.state['Landing-App'].appId}/>
		
      </div>
    );
  }
}



export default App;
