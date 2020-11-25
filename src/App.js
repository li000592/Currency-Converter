import React, {Component} from 'react';
import './App.css';
import Search from './component/Search'
import AppHeader from './component/AppHeader'
import ListView from './component/listView' 

class App extends Component {

  state ={
    countryList:[
      {
        id:1,
        coutryName:'Canada',
        date:'2020-11-18'
      }
    ]
  }
  render(){
    return (
      <div className="App">
        <AppHeader/>
        <ListView countryList={this.state.countryList}/>
      </div>
    )
  }

}

export default App;
