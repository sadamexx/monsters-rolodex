import React, { Component } from 'react';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: ''
    };
    // this.handleChange = this.handleChange.bind(this) if we didn't use the arrow function on line 25
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => 
      response.json())
    
    .then(users => this.setState({ monsters: users}))
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    const {monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()) ||
      monster.email.toLowerCase().includes(searchField.toLowerCase()) ||
      monster.address.city.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
        placeholder='Search Monsters'
        handleChange={this.handleChange} />

        <CardList monsters={filteredMonsters} />
          
        
      </div>
    );
  }
  
}

export default App;
