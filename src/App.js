
import React from "react";
import './styles.css';
import CharCreation from './components/CharCreation';
import Header from './components/Header';
import CharList from './components/CharList';

const sampleChar = {
    name: "My first character",
    age: "56",
    race: "Dwarf",
    gender: "Male",
    classType: "Knight",
    desc: "This character may be small in stature, but their strength is more than enough for their warhammer.",
  
}
class App extends React.Component {
  state = {
    characters: {},
  };

  componentDidUpdate() {
    console.log(this.state.characters);
    localStorage.setItem(window.location.pathname, JSON.stringify(this.state.characters));
  };

  componentDidMount() {
    const localStorageRef = localStorage.getItem(window.location.pathname);
    if(localStorageRef) {
      this.setState({ characters: JSON.parse(localStorageRef)});
    }
  }

  updateChar = (key, updatedChar) => {
    // 1. Take a copy of the current state
    const characters = { ...this.state.characters };
    // 2. Update that state
    characters[key] = updatedChar;
    // 3. Set that to state
    this.setState({ characters });
  };

  deleteChar = key => {
    // 1. take a copy of state
    const characters = { ...this.state.characters };
    // 2. update the state
    delete characters[key];
    this.setState({ characters });
  };

  loadSample = () => {
    // Copy the state
    const characters = {...this.state.characters};
    // Add the new character to the characters variable
    characters[`character${Date.now()}`] = sampleChar;
    // set the new state
    this.setState({ characters });
  };

  addChar = event => {
    
    // Copy the state
    const characters = {...this.state.characters};
    // Add the new character to the characters variable
    characters[`character${Date.now()}`] = event;
    // set the new state
    this.setState({ characters });

  }

  render() {
    return (
      <div className="bgdiv">
        <Header />
        <div className="main">
          <div className="charCreator">
            <CharCreation loadSample={this.loadSample} addChar={this.addChar}/>
          </div>
          <div className="charCreator">
            <CharList characters={this.state.characters} updateChar={this.updateChar} deleteChar={this.deleteChar} />   
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
