import React from 'react';
import skeleton from './skeleton_statblock.png';
import zombie from './zombie_statblock.png';
import ghoul from './ghoul_statblock.png';
import ghast from './ghast_statblock.png';
import mummy from './mummy_statblock.png';
import wight from './wight_statblock.png';
import undead_spirit from './undead_spirit_statblock.png';

class StatBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { src: skeleton }
    }

    componentDidUpdate(prevProps) {
        if (this.props.minionType !== prevProps.minionType) {
            switch (this.props.minionType) {
                case "Skeleton":
                    this.setState({ src: skeleton})
                    break;
                case "Zombie":
                    this.setState({ src: zombie})
                    break;
                case "Ghoul":
                    this.setState({ src: ghoul})
                    break;
                case "Ghast":
                    this.setState({ src: ghast})
                    break;
                case "Mummy":
                    this.setState({ src: mummy})
                    break;
                case "Wight":
                    this.setState({ src: wight})
                    break;
                case "Undead Spirit":
                    this.setState({ src: undead_spirit})
                    break;
                default:
                    break;
            }
        }
    }

    render() {
        return (
            <div className="statBlock">
                <img src={ this.state.src } alt="Skeleton" style={{ maxHeight: 400 }} />
            </div>
        );
    }
}

export default StatBlock;