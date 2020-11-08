import React from 'react';
import './App.css';
import baron from './baron.jpg';

class App extends React.Component {

  state = {
    names: [
      {'id': 1, 'name':'Julie', 'recent_match_time':'2020-11-06', 'KDA':'10/3/5', 'tilt_level':'1'},
      {'id': 2, 'name':'Kevin', 'recent_match_time':'2020-10-16', 'KDA':'4/20/1', 'tilt_level':'5'}, 
      {'id': 3, 'name':'Dennis', 'recent_match_time':'2020-10-24', 'KDA':'15/13/5', 'tilt_level':'3'}, 
      {'id': 4, 'name':'Sabrina', 'recent_match_time':'2020-11-01', 'KDA':'8/8/8', 'tilt_level':'2'},
    ],
    searchTerm: '', 
    searchOutput: '',
    searchValue: "",
    tilt: ''
  }

  handleOnChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  handleSearch = () => {
    this.makeApiCall(this.state.searchValue);
  };

  makeApiCall = searchInput => {
    var searchUrl = `https://tiltproof-backend.herokuapp.com/gettilt=${searchInput}`;
    console.log(searchInput)
    fetch(searchUrl)
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        console.log(jsonData)
        this.setState({ tilt: jsonData });
      });
  };

    render(){
      return (
        <div>
          <div class="App-logo">
            <img src={baron} alt="" height="600" width="300" float="left"></img>
          </div>

          <div style = {{textAlign: 'center', paddingTop: '30vh'}}>
          <input
            name="text"
            type="text"
            placeholder="Search"
            onChange={event => this.handleOnChange(event)}
            value={this.state.searchValue}
          />
          <button onClick={this.handleSearch}>Search</button>
          {this.state.tilt ? (
            <div >
              {this.state.tilt}
            </div>
            ) : (
              <p>Try searching a summoner name</p>
            )}
          </div>
        </div>
      );
    }
}

export default App;
