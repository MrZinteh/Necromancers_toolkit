import React from 'react';
import zombie from './zombie.png';
import skeleton from './skeleton.png';
import ghast from './ghast.png';
import ghoul from './ghoul.png';
import mummy from './mummy.png';
import wight from './wight.png';
import undead_spirit from './undead_spirit.png';

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = { src: skeleton }
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.minionType !== prevProps.minionType) {
            switch (this.props.minionType) {
                case "Skeleton":
                    this.setState({ src: skeleton})
                    // this.state = { src: skeleton};
                    break;
                case "Zombie":
                    this.setState({ src: zombie})
                    // this.state = { src: zombie};
                    break;
                case "Ghoul":
                    this.setState({ src: ghoul})
                    // this.state = { src: ghoul};
                    break;
                case "Ghast":
                    this.setState({ src: ghast})
                    // this.state = { src: ghast};
                    break;
                case "Mummy":
                    this.setState({ src: mummy})
                    // this.state = { src: mummy};
                    break;
                case "Wight":
                    this.setState({ src: wight})
                    // this.state = { src: mummy};
                    break;
                case "Undead Spirit":
                    this.setState({ src: undead_spirit})
                    // this.state = { src: undead_spirit};
                    break;
                default:
                    break;
            }
        }
    }

    render() {
        return (
            <div className='Image'>
                <img src={ this.state.src } alt="Zombie" height="400" style={{ maxWidth: 300 }}/>
            </div>
        );
    }
}

export default Image;