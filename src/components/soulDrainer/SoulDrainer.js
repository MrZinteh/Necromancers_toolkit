import React from 'react';
import { DrainButton } from './DrainButton';

class SoulDrainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { amount: "" }
        this.drainSoul = this.drainSoul.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    drainSoul() {
        fetch(`/souls/${this.state.amount}`, {method: "DELETE"})
            .then(() => {
                this.props.fetchSoulCount();
                this.props.toggleRecentlyCaptured();
            });
    }

    handleInputChange(e) {
        this.setState({
            amount: e.target.value,
        });
    }

    render() {
        return (
            <div className="soulDrainer">
                <input type="number" id="soulAmount" name="soulAmount" placeholder="Amount to drain..." onChange={this.handleInputChange}/>
                <DrainButton onClick={this.drainSoul} />
            </div>
        );
    }
}

export default SoulDrainer;