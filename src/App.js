import React, {Component} from 'react';
import './App.css';
import AppHeader from './component/AppHeader'
import ListView from './component/listView'
import FullCountryList from './component/fullCountryList'
import { HashRouter as Router, Route} from "react-router-dom"

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
      <Router className="App">
        <AppHeader/>
        <ListView countryList={this.state.countryList}/>
        
      </Router>
    )
  }

}

export default App;
