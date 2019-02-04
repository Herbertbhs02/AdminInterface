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
		},
 filter:''	}

  }
    origins = (e)=>{this.setState({filter:e})}
	

  render() {
	  if(this.state.filter==''){
    return (
      <div className="App">
		   <div className='header'><h2>Styx Origins Dashboard</h2></div>
		   <Filter origins={this.origins}/>
           <Data Active={this.state['Shopping-App'].activeOrigins} Inactive={this.state['Shopping-App'].inactiveOrigins} app={this.state['Shopping-App'].appId} filter={this.state.filter}/> 
		   <Data Active={this.state['Landing-App'].activeOrigins} Inactive={this.state['Landing-App'].inactiveOrigins} app={this.state['Landing-App'].appId} filter= {this.state.filter}/>
		 
	  </div>
	
	);
	}if(this.state.filter=='s'||this.state.filter=='sh'){
		return (
			<div className="App">
				 <div className='header'><h2>Styx Origins Dashboard</h2></div>
				 <Filter origins={this.origins}/>
				 <Data Active={this.state['Shopping-App'].activeOrigins} Inactive={this.state['Shopping-App'].inactiveOrigins} app={this.state['Shopping-App'].appId} filter={this.state.filter}/> 
				 
			   
			</div>
		  
		  );
	}if(this.state.filter=='l'||this.state.filter=='la'){
		return (
			<div className="App">
				 <div className='header'><h2>Styx Origins Dashboard</h2></div>
				 <Filter origins={this.origins}/>
				 <Data Active={this.state['Landing-App'].activeOrigins} Inactive={this.state['Landing-App'].inactiveOrigins} app={this.state['Landing-App'].appId} filter= {this.state.filter}/>
			   
			</div>
		  
		  );
	}else{return (
		<div className="App">
			 <div className='header'><h2>Styx Origins Dashboard</h2></div>
			 <Filter origins={this.origins}/>
			
		   
		</div>
	  
	  );}

  }
}



export default App;
