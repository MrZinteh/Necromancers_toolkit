import React from 'react';
import './App.css';
import SoulGatherer from './components/soulGatherer/soulGatherer';
import Header from './components/header/Header';
import Selector from './components/selector/Selector';
import Image from './components/image/Image';
import StatBlock from './components/statBlock/StatBlock';
import MinionViewer from './components/minionViewer/MinionViewer';
import MinionConjurer from './components/minionConjurer/MinionConjurer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedMinion: "Skeleton" };
    this.selectMinion = this.selectMinion.bind(this);
  }

  selectMinion(e) {
    this.setState({selectedMinion: e.target.id})
  }

  render() {
      return (
      <div className="App">
        <Header />
        <Selector selectMinion={ this.selectMinion }/>
        <div className="conCap">
          <MinionConjurer />
          <SoulGatherer />
        </div>
        <StatBlock minionType={ this.state.selectedMinion }/>
        <Image minionType={ this.state.selectedMinion }/>
        <MinionViewer minionType={ this.state.selectedMinion }/>
      </div>
    )
  }
}

export default App;
