import React ,{Component}from 'react';
import './App.css';
import Jobs from './jobsSource/indexJobs';

class App extends Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
        
          <h1>BRICOMAN</h1>
        </header> 
        <landing>
        <Jobs />
        </landing>
      </div>
    )
  
  }
}

export default App;
