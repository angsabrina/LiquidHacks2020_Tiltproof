import React from 'react';
import './App.css';
import draven from './draven_draven.png';

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
    searchValue: '',
    tilt: '',
    tilt_score: '',
    tilt_message: '',
    graph1: '',
  }

  handleOnChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  handleSearch = () => {
    this.makeApiCall(this.state.searchValue);
  };

  makeApiCall = searchInput => {
    // var searchUrl = 'https://tiltproof-backend.herokuapp.com/gettilt=${searchInput}';
    var searchUrl = `http://127.0.0.1:5000/gettilt/${searchInput}`;
    console.log(searchInput)
    fetch(searchUrl)
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        console.log(jsonData)
        this.setState({ tilt: jsonData['name'] });
        this.setState({ tilt_score: jsonData['score']});
        this.setState({ tilt_message: jsonData['messages']});
        this.setState({ searchTerm: searchInput })
      });
  };



    render(){
      return (
        <div style = {{textAlign: 'center'}}>


         
          

            <div style = {{textAlign: 'center', paddingTop: '5vh', background: '#7ECEDF', paddingBottom: '50px' }} >
              <img src={draven} />
              <b><h1 id='title'>TiltPROOF</h1></b>
              <input 
                id='rounded_search_bar'
                name="text"
                type="text"
                placeholder="Search for a summoner name"
                onChange={event => this.handleOnChange(event)}
                value={this.state.searchValue}
              />
              <button onClick={this.handleSearch} id='pretty_button'>Search</button>
            </div>


            <div id='background'>
              
              
              
            
                {this.state.tilt ? (
                  <>
                    <div id='background'>
                      <div id='rcorners'>

                        <div id='text_block'>
                          <h1><b>{this.state.tilt}</b></h1>
                        </div>

                        <div id='text_block'>
                          <h3><b>{this.state.searchTerm}: {this.state.tilt_score}</b></h3>
                        </div>

                        <div id='text_block'>
                          {this.state.tilt_message}
                        </div>
                      </div>

                      <div class="row">
                        <div class="column">
                          <img src={"http://127.0.0.1:5000/img/" + this.state.searchTerm + "_kda"} width="600" height="350"/>
                          <img src={"http://127.0.0.1:5000/img/" + this.state.searchTerm + "_gepm"} width="600" height="350"/>
                        </div>
                        <div class="column">
                          <img src={"http://127.0.0.1:5000/img/" + this.state.searchTerm + "_pddtc"} width="600" height="350"/>
                          <img src={"http://127.0.0.1:5000/img/" + this.state.searchTerm + "_tddtc"} width="600" height="350"/>
                        </div>
                        <div class="column">
                          <img src={"http://127.0.0.1:5000/img/" + this.state.searchTerm + "_mddtc"} width="600" height="350"/>
                          <img src={"http://127.0.0.1:5000/img/" + this.state.searchTerm + "_tmk"} width="600" height="350"/>
                        </div>
                      </div>
                    </div>
                  </>
                  
                  ) : (
                    <p></p>
                  )}
          </div>
        </div>
      );
    }
}

export default App;
