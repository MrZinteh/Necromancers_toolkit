import React from 'react';

class MinionViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { result: [], loading: true };
        this.getMinions = this.getMinions.bind(this);
    }

    getMinions() {
        this.setState({ loading: true })
        fetch(`/minions/${this.props.minionType}`)
            .then((res) => res.json())
            .then((data) => {
                if(data.rowCount > 0) {
                    this.setState({ result: data.rows, loading: false });
                }
                else {
                    this.setState({ result: [], loading: false });
                }
            });
    }

    componentDidUpdate(prevProps) {
        if (this.props.minionType !== prevProps.minionType) {
            this.getMinions();
        }
    }

    render() {
        return (
            <div className="minionViewer">
                { this.state.loading ? "Loading..." : 
                    (this.state.result.length === 0 ) ? `No ${this.props.minionType}s found` : 
                        this.state.result.map((row) => <p>{row.minion_name}</p>)}
            </div>
        );
    }
}

export default MinionViewer;