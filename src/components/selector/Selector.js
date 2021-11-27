import React from 'react';

class Selector extends React.Component {
    render() {
        const selectMinion = this.props.selectMinion;
        return (
            <div className='Selector'>
                <div className='selectorItem' id='Skeleton' onClick={selectMinion}>Skeleton</div>
                <div className='selectorItem' id='Zombie' onClick={selectMinion}>Zombie</div>
                <div className='selectorItem' id='Ghoul' onClick={selectMinion}>Ghoul</div>
                <div className='selectorItem' id='Ghast' onClick={selectMinion}>Ghast</div>
                <div className='selectorItem' id='Wight' onClick={selectMinion}>Wight</div>
                <div className='selectorItem' id='Mummy' onClick={selectMinion}>Mummy</div>
                <div className='selectorItem' id='Undead Spirit' onClick={selectMinion}>Undead Spirit</div>
            </div>
        );
    }
}

export default Selector;