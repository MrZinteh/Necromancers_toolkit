import React from 'react';
import { SoulRemover } from './SoulRemover';

class SoulManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = { result: [], loading: true };
        this.getSouls = this.getSouls.bind(this);
        this.removeSoul = this.removeSoul.bind(this);
    }

    getSouls() {
        this.setState({ loading: true })
        fetch(`/souls`)
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

    removeSoul(name) {
        fetch(`/souls?name=${name}`, {method: 'DELETE'})
            .then(() => {
                this.getSouls();
            })
    }

    componentDidMount() {
        this.getSouls();
    }

    componentDidUpdate(prevProps) {
        if (this.props.recentlyCaptured) {
            this.getSouls();
            this.props.toggleRecentlyCaptured();
        }
    }

    render() {
        return (
            <div className="soulManager">
                <h3>Souls:</h3>
                { this.state.loading ? "Loading..." : 
                    (this.state.result.length === 0 ) ? `No souls found` : 
                        this.state.result.map((row) => <div className="soulRow"><p>{row.soul_name}</p> <SoulRemover onClick={() => this.removeSoul(row.soul_name)} /></div>)}
            </div>
        );
    }
}
export default SoulManager;