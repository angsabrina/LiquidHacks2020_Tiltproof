import React from 'react';
import './App.css';
import NamesContainer from './NamesContainer';
import baron from './baron.jpg';

class App extends React.Component {

  state = {
    names: [
      {'id': 1, 'name':'Julie', 'recent_match_time':'2020-11-06', 'KDA':'10/3/5'},
      {'id': 2, 'name':'Kevin', 'recent_match_time':'2020-10-16', 'KDA':'4/20/1'}, 
      {'id': 3, 'name':'Dennis', 'recent_match_time':'2020-10-24', 'KDA':'15/13/5'}, 
      {'id': 4, 'name':'Sabrina', 'recent_match_time':'2020-11-01', 'KDA':'8/8/8'},
    ],
    searchTerm: ''
  }

  editSearchTerm = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  dynamicSearch = () => {
    var output = this.state.names.filter(element => element.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    console.log(output)
    return output
  }


    render(){
      return (
        <div>
          <div class="App-logo">
            <img src={baron} alt="" height="600" width="300" float="left"></img>
          </div>
          <div style = {{textAlign: 'center', paddingTop: '30vh'}}>
          <input type= 'text' value = {this.state.searchTerm} onChange = {this.editSearchTerm} placeholder = 'Search for a user!'/>
          <br></br>
          <h3>These are the important names:</h3>
          <NamesContainer names = {this.dynamicSearch()}/>
          </div>
        </div>
      );
    }
}

export default App;
