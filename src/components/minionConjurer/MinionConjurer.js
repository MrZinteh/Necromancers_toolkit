import React from 'react';
import { ConjureButton } from './ConjureButton.js';

class MinionConjurer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { minionType: "Skeleton", input: "Skeleton" }
        this.handleSelect = this.handleSelect.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSelect(e) {
        this.setState({
            minionType: e.target.value
        })
    }

    handleClick() {
        fetch(`/minions?type=${this.state.minionType}`, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({"name": `${this.state.input}`})
        })
            .then(() => {
                this.props.toggleRecentlyConjured();
            });
    }

    handleInputChange(e) {
        this.setState({
            input: e.target.value,
        });
    }

    render() {
        return (
            <div className="minionConjurer">
                <select name="minions" id="minions" onChange={this.handleSelect}>
                    <option value="Skeleton">Skeleton</option>
                    <option value="Zombie">Zombie</option>
                    <option value="Ghoul">Ghoul</option>
                    <option value="Ghast">Ghast</option>
                    <option value="Wight">Wight</option>
                    <option value="Mummy">Mummy</option>
                    <option value="Undead Spirit">Undead Spirit</option>
                </select>
                <ConjureButton onClick={this.handleClick} />
            </div>
        );
    }
}

export default MinionConjurer;