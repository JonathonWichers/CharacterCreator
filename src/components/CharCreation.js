import React from "react";
import "../styles.css";
import PropTypes from "prop-types";

class CharCreation extends React.Component {

    nameRef = React.createRef();
    ageRef = React.createRef();
    raceRef = React.createRef();
    genderRef = React.createRef();
    classRef = React.createRef();
    descRef = React.createRef();

    static propTypes = {
        addChar: PropTypes.func
    };

    createChar = (event) => {
        // Stop the form from submitting (prevents page reload)
        event.preventDefault();
        const chara = {
            name: this.nameRef.current.value,
            age: this.ageRef.current.value,
            race: this.raceRef.current.value,
            gender: this.genderRef.current.value,
            classType: this.classRef.current.value,
            desc: this.descRef.current.value,
          };
        this.props.addChar(chara);
        event.currentTarget.reset();
    };

    

    render() {
        return (
            <div>
                <h2>Input your character's information below</h2>
                <button onClick={this.props.loadSample}>Load a Sample Character.</button> 
                <form className="charForm" onSubmit={this.createChar}>
                    <input className="formPiece" type="text" required name="name" ref={this.nameRef} maxLength="25" placeholder="Character Name"/>
                    <input className="formPiece" type="number" required name="age" ref={this.ageRef} maxLength="3" placeholder="Age"/>
                    <b className="selectPieceb">Race:</b>
                    <select className="selectPiece" type="text" name="race" ref={this.raceRef}>
                        <option value="Human">Human</option>
                        <option value="Elf">Elf</option>
                        <option value="Dwarf">Dwarf</option>
                    </select>

                    <b className="selectPieceb">Gender:</b>
                    <select className="selectPiece" type="text" name="gender" ref={this.genderRef}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                
                    <b className="selectPieceb">Class:</b>
                    <select className="selectPiece" type="text" name="classType" ref={this.classRef}>
                        <option value="Wizard">Wizard</option>
                        <option value="Knight">Knight</option>
                        <option value="Priest">Priest</option>
                        <option value="Archer">Archer</option>
                    </select>

                    <textarea className="formPiece" name="desc" ref={this.descRef} placeholder="Enter your character's description here."></textarea>

                    <button className="formPiece" type="submit">+ Add Character</button>
                </form>
                <h2>Extra Information</h2>
                <h2><u>Races</u></h2>
                <h3>Humans: are the most common race you will find in the land. Due to this, 
                    there are many human kingdoms and factions to discover. 
                </h3>
                <h3>Elves: The rarest race due to their long lives and slow reproduction. 
                    Small groups of elves are commonly found in forests while grand cities 
                    house the greatest clans of elves.
                </h3>
                <h3>Dwarves: Almost as common as humans, large dwarven mines and settlements
                    can be found quite often. There are many dwarven masters of enchanting weapons and armor
                    who love gold for their services.

                </h3>
                <h2><u>Classes</u></h2>
                <h3>Wizards:
                    Someone who has learned the magical arts in order to cast a variety of offensive/supportive spells.
                </h3>
                <h3>Knights:
                    A trained warrior who prefers close combat.
                </h3>
                <h3>Priests:
                    One who use their magical prayers to heal and buff their allies.
                </h3>
                <h3>Archers:
                    Master of bows and creating special types of arrows.
                </h3>
            </div>
        );
    }
}

export default CharCreation;