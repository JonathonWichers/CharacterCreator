import React from "react";
import '../styles.css';
import Character from './Character';

class CharList extends React.Component {
  render() {
    return (
      <div className="formPiece">
        <h2>My Characters</h2>
        <p>(You can edit your characters right in this list!)</p>
        {Object.keys(this.props.characters).map(key => (
            <Character
            key={key}
            index={key}
            details={this.props.characters[key]}
            updateChar={this.props.updateChar} 
            deleteChar={this.props.deleteChar}
            />
        ))}
          
      </div>
    );
  }
}

export default CharList;