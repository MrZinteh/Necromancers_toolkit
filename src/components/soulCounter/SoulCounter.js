import React from 'react';

class SoulCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: "0" }
        this.fetchSoulCount = this.fetchSoulCount.bind(this);
    }

    fetchSoulCount() {
        fetch(`/souls/count`)
            .then((res) => res.json())
            .then((data) => this.setState({ count: data.count }));
    }

    componentDidMount() {
        this.fetchSoulCount();
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.fetchSoulCount();
        }
    }

    render() {
        return (
            <div className="soulCounter">
                <div className="Souls">Souls:</div>
                <div className="count">{this.props.count}</div>
            </div>
        )
    }
}

export default SoulCounter;