import React from 'react';
import { CaptureButton } from './CaptureButton.js';

class SoulGatherer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { soul: "", input: "" }
        this.conjureSoul = this.conjureSoul.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    conjureSoul() {
        fetch(`/souls?name=${this.state.input}`, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({"name": `${this.state.input}`})
        })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ soul: data.soul_name });
                this.props.fetchSoulCount();
                this.props.toggleRecentlyCaptured();
            });
    }

    handleInputChange(e) {
        this.setState({
            input: e.target.value,
        });
    }

    render() {
        return (
            <div className="soulGatherer">
                <input type="text" id="soulName" name="soulName" placeholder="Name of soul..." onChange={this.handleInputChange}/>
                <CaptureButton onClick={this.conjureSoul} />
            </div>
        );
    }
}

export default SoulGatherer;