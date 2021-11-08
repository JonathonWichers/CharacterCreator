import React from "react";
import '../styles.css';

class Character extends React.Component {

    handleChange = event => {
        console.log(event.currentTarget.value);
        // update that character
        // 1. Take a copy of the current character
        const updatedChar = {
          ...this.props.details,
          [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updateChar(this.props.index, updatedChar);
      };

    render() {
        const {name, age, race, gender, classType, desc} = this.props.details;

        return (
            <div className="character">
                
                <input
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    value={name}
                />
                <input
                    type="number"
                    name="age"
                    onChange={this.handleChange}
                    value={age}
                />

                <select
                    type="text"
                    name="race"
                    onChange={this.handleChange}
                    value={race}
                >
                    <option value="Human">Human</option>
                    <option value="Elf">Elf</option>
                    <option value="Dwarf">Dwarf</option>
                </select>

                <select 
                    type="text"
                    name="gender"
                    onChange={this.handleChange}
                    value={gender} 
                >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <select 
                    type="text"
                    name="classType"
                    onChange={this.handleChange}
                    value={classType} 
                >
                    <option value="Wizard">Wizard</option>
                    <option value="Knight">Knight</option>
                    <option value="Priest">Priest</option>
                    <option value="Archer">Archer</option>
                </select>
                <textarea
                    name="desc"
                    onChange={this.handleChange}
                    value={desc}
                />
                
                <button onClick={() => this.props.deleteChar(this.props.index)}>
                Delete Character
                </button>
                
            </div>
        );
    }
}

export default Character;