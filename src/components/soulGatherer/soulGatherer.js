import React from 'react';
import { CaptureButton } from './CaptureButton.js';

class SoulGatherer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { soul: "", input: "" }
        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleClick() {
        fetch(`/souls?name=${this.state.input}`, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({"name": `${this.state.input}`})
        })
            .then((res) => res.json())
            .then((data) => this.setState({ soul: data.soul_name }));
    }

    handleInputChange(e) {
        this.setState({
            input: e.target.value,
        });
    }

    render() {
        return (
            <div className="soulGatherer">
                <input type="text" id="soulName" name="soulName" onChange={this.handleInputChange}/>
                <CaptureButton onClick={this.handleClick} />
                <header>
                    <p>{this.state.soul}</p>
                </header>
            </div>
        );
    }
}

export default SoulGatherer;