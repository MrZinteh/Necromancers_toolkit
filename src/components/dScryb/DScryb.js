import React from 'react';

class DScryb extends React.Component {
    render() {
        const minionType = this.props.minionType;
        const descriptions = {
            "Skeleton": 
            <p>Chanting the call to the dead, I cut my finger with my dagger, peel skin from the wound, and roll the blood and flesh in bone dust. I smear the ball on the skull, then incant as I walk around the pile. The bones knit together, and finally, the skeleton stands, a sinister glow in its eye sockets.</p>,
            "Zombie": 
            <p>Dark energy flows from my hands into the remains of the fallen, and to the horror of the others in your presence, the form of the deceased shambles to its feet, tireless and completely in my thrall.</p>
            ,
            "Ghoul": 
            <p>I ignore the cloying chill growing in my bones as I continue my work, placing the onyx stones on each of the corpses in front of me. I chant the forbidden words in a slow dirge as I spread the grave dirt around the room, taking care to draw an unbroken circle around my charges. A sickening hum begins to build in the chamber when I dip my numb fingers into the clay pot and flick brackish water over each of the corpses—a cruel mockery of a blessing. The hum rises to a crescendo and bile fills my mouth as the necrotic energy swirls around them. They rise.</p>
            ,
            "Ghast": 
            <p>I ignore the cloying chill growing in my bones as I continue my work, placing the onyx stones on each of the corpses in front of me. I chant the forbidden words in a slow dirge as I spread the grave dirt around the room, taking care to draw an unbroken circle around my charges. A sickening hum begins to build in the chamber when I dip my numb fingers into the clay pot and flick brackish water over each of the corpses—a cruel mockery of a blessing. The hum rises to a crescendo and bile fills my mouth as the necrotic energy swirls around them. They rise.</p>
            ,
            "Wight": 
            <p>I ignore the cloying chill growing in my bones as I continue my work, placing the onyx stones on each of the corpses in front of me. I chant the forbidden words in a slow dirge as I spread the grave dirt around the room, taking care to draw an unbroken circle around my charges. A sickening hum begins to build in the chamber when I dip my numb fingers into the clay pot and flick brackish water over each of the corpses—a cruel mockery of a blessing. The hum rises to a crescendo and bile fills my mouth as the necrotic energy swirls around them. They rise.</p>
            ,
            "Mummy": 
            <p>I ignore the cloying chill growing in my bones as I continue my work, placing the onyx stones on each of the corpses in front of me. I chant the forbidden words in a slow dirge as I spread the grave dirt around the room, taking care to draw an unbroken circle around my charges. A sickening hum begins to build in the chamber when I dip my numb fingers into the clay pot and flick brackish water over each of the corpses—a cruel mockery of a blessing. The hum rises to a crescendo and bile fills my mouth as the necrotic energy swirls around them. They rise.</p>
        ,
            "Undead Spirit": 
            <p>I hold the gilded skull forwards and chant in abyssal and as I chant, the skull starts floating and turning on its axis. A [spectral/putrid/skeletal] form manifests around the skull forming its new unholy body.</p>
        }
        return (
            <div className='dScryb'>
                {descriptions[minionType]}
            </div>
        );
    }
}

export default DScryb;