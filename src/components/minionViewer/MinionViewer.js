import React from 'react';
import { MinionReDeceaser } from './MinionReDeceaser'; 

class MinionViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { result: [], loading: true };
        this.getMinions = this.getMinions.bind(this);
        this.reDecease = this.reDecease.bind(this);
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

    reDecease(name) {
        fetch(`/minions?name=${name}`, {method: 'DELETE'})
            .then(() => {
                this.getMinions();
            })
    }

    componentDidMount() {
        this.getMinions();
    }

    componentDidUpdate(prevProps) {
        if (this.props.minionType !== prevProps.minionType) {
            this.getMinions();
        }
        else if (this.props.recentlyConjured) {
            this.getMinions();
            this.props.toggleRecentlyConjured();
        }
    }

    render() {
        return (
            <div className="minionViewer">
                <h3>Minions:</h3>
                { this.state.loading ? "Loading..." : 
                    (this.state.result.length === 0 ) ? `No ${this.props.minionType}s found` : 
                        this.state.result.map((row) => <div className="minionRow"><p>{row.minion_name}</p> <MinionReDeceaser onClick={() => this.reDecease(row.minion_name)} /></div>)}
            </div>
        );
    }
}

export default MinionViewer;