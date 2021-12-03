import React from 'react';
import './App.css';
import SoulGatherer from './components/soulGatherer/soulGatherer';
import Header from './components/header/Header';
import Selector from './components/selector/Selector';
import Image from './components/image/Image';
import StatBlock from './components/statBlock/StatBlock';
import MinionViewer from './components/minionViewer/MinionViewer';
import MinionConjurer from './components/minionConjurer/MinionConjurer';
import SoulCounter from './components/soulCounter/SoulCounter';
import Description from './components/description/Description';
import DScryb from './components/dScryb/DScryb';
import SoulManager from './components/soulManager/SoulManager';
import SoulDrainer from './components/soulDrainer/SoulDrainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedMinion: "Skeleton", count: "0", recentlyConjured: false, recentlyCaptured: false };
    this.selectMinion = this.selectMinion.bind(this);
    this.fetchSoulCount = this.fetchSoulCount.bind(this);
    this.toggleRecentlyConjured = this.toggleRecentlyConjured.bind(this);
    this.toggleRecentlyCaptured = this.toggleRecentlyCaptured.bind(this);
  }

  selectMinion(e) {
    this.setState({selectedMinion: e.target.id})
  }

  fetchSoulCount() {
    fetch(`/souls/count`)
        .then((res) => res.json())
        .then((data) => this.setState({ count: data.count }));
  }

  toggleRecentlyConjured() {
    this.setState({recentlyConjured: !this.state.recentlyConjured})
  }

  toggleRecentlyCaptured() {
    this.setState({recentlyCaptured: !this.state.recentlyCaptured})
  }

  componentDidMount() {
    this.fetchSoulCount();
  }

  render() {
      return (
      <div className="App">
        <SoulCounter count={ this.state.count }/>
        <Header />
        <Selector selectMinion={ this.selectMinion }/>
        <div className="conCap">
          <MinionConjurer toggleRecentlyConjured={ this.toggleRecentlyConjured }/>
          <SoulGatherer fetchSoulCount={ this.fetchSoulCount } toggleRecentlyCaptured={ this.toggleRecentlyCaptured }/>
          <SoulDrainer fetchSoulCount={ this.fetchSoulCount } toggleRecentlyCaptured={ this.toggleRecentlyCaptured }/>
        </div>
        <StatBlock minionType={ this.state.selectedMinion }/>
        <Image minionType={ this.state.selectedMinion }/>
        <MinionViewer minionType={ this.state.selectedMinion } recentlyConjured= { this.state.recentlyConjured } toggleRecentlyConjured={ this.toggleRecentlyConjured }/>
        <SoulManager recentlyCaptured={ this.state.recentlyCaptured } toggleRecentlyCaptured={ this.toggleRecentlyCaptured }/>
        <Description minionType={ this.state.selectedMinion }/>
        <DScryb minionType={ this.state.selectedMinion }/>
      </div>
    )
  }
}

export default App;
