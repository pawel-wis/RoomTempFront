import React, {Component} from 'react';
import './App.css';
import Chart from './Components/Chart'


class App extends Component{

  state = {
    room_data: []
  }
  
  api_url = "http://localhost:8000/api/room/"

  componentDidMount() {
    fetch(this.api_url)
    .then(res => res.json())
    .then(json => this.setState({data: json}))
  }

  render(){
    return(
      <div className="App">
        <h1>
          Mieszkanie Tęczowa
        </h1>
        <Chart room_data={this.state.room_data}/>
      </div>
    )
  }
}

export default App;
