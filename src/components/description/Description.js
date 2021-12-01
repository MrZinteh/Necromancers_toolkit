import React from 'react';

class Description extends React.Component {
    render() {
        const minionType = this.props.minionType;
        const descriptions = {
            "Skeleton": 
            <p>Skeletons arise when animated by dark magic. They heed the summons of spellcasters who call them from their stony tombs and ancient battlefields, or rise of their own accord in places saturated with death and loss, awakened by stirrings of necromantic energy or the presence of corrupting evil.
            <br /><br />
            <b><i>Animated Dead.</i></b> Whatever sinister force awakens a skeleton infuses its bones with a dark vitality, adhering joint to joint and reassembling dismantled limbs. This energy motivates a skeleton to move and think in a rudimentary fashion, though only as a pale imitation of the way it behaved in life. An animated skeleton retains no connection to its past, although resurrecting a skeleton restores it body and soul, banishing the hateful undead spirit that empowers it.
            <br /><br />
            While most skeletons are the animated remains of dead humans and other humanoids, skeletal undead can be created from the bones of other creatures besides humanoids, giving rise to a host of terrifying and unique forms.
            <br /><br />
            <b><i>Obedient Servants.</i></b> Skeletons raised by spell are bound to the will of their creator. They follow orders to the letter, never questioning the tasks their masters give them, regardless of the consequences. Because of their literal interpretation of commands and unwavering obedience, skeletons adapt poorly to changing circumstances. They can’t read, speak, emote, or communicate in any way except to nod, shake their heads, or point. Still, skeletons are able to accomplish a variety of relatively complex tasks.
            <br /><br />
            A skeleton can fight with weapons and wear armor, can load and fire a catapult or trebuchet, scale a siege ladder, form a shield wall, or dump boiling oil. However, it must receive careful instructions explaining how such tasks are accomplished.
            <br /><br />
            Although they lack the intellect they possessed in life, skeletons aren’t mindless. Rather than break its limbs attempting to batter its way through an iron door, a skeleton tries the handle first. If that doesn’t work, it searches for another way through or around the obstacle.
            <br /><br />
            <b><i>Habitual Behaviors.</i></b> Independent skeletons temporarily or permanently free of a master’s control sometimes pantomime actions from their past lives, their bones echoing the rote behaviors of their former living selves. The skeleton of a miner might lift a pick and start chipping away at stone walls. The skeleton of a guard might strike up a post at a random doorway. The skeleton of a dragon might lie down on a pile of treasure, while the skeleton of a horse crops grass it can’t eat. Left alone in a ballroom, the skeletons of nobles might continue an eternally unfinished dance.
            <br /><br />
            When skeletons encounter living creatures, the necromantic energy that drives them compels them to kill unless they are commanded by their masters to refrain from doing so. They attack without mercy and fight until destroyed, for skeletons possess little sense of self and even less sense of self-preservation.
            <br /><br />
            <b><i>Undead Nature.</i></b> A skeleton doesn’t require air, food, drink, or sleep</p>,
            "Zombie": 
            <p>From somewhere in the darkness, a gurgling moan is heard. A form lurches into view, dragging one foot as it raises bloated arms and broken hands. The zombie advances, driven to kill anyone too slow to escape its grasp.
            <br /><br />
            <b><i>Dark Servants.</i></b> Sinister necromantic magic infuses the remains of the dead, causing them to rise as zombies that do their creator’s bidding without fear or hesitation. They move with a jerky, uneven gait, clad in the moldering apparel they wore when put to rest, and carrying the stench of decay.
            <br /><br />
            Most zombies are made from humanoid remains, though the flesh and bones of any formerly living creature can be imbued with a semblance of life. Necromantic magic, usually from spells, animates a zombie. Some zombies rise spontaneously when dark magic saturates an area. Once turned into a zombie, a creature can’t be restored to life except by powerful magic, such as a resurrection spell.
            <br /><br />
            A zombie retains no vestiges of its former self, its mind devoid of thought and imagination. A zombie left without orders simply stands in place and rots unless something comes along that it can kill. The magic animating a zombie imbues it with evil, so left without purpose, it attacks any living creature it encounters.
            <br /><br />
            <b><i>Hideous Forms.</i></b> Zombies appear as they did in life, showing the wounds that killed them. However, the magic that creates these vile creatures often takes time to run its course. Dead warriors might rise from a battlefield, eviscerated and bloated after days in the sun. The muddy cadaver of a peasant could claw its way from the ground, riddled with maggots and worms. A zombie might wash ashore or rise from a marsh, swollen and reeking after weeks in the water.
            <br /><br />
            <b><i>Mindless Soldiers.</i></b> Zombies take the most direct route to any foe, unable to comprehend obstacles, tactics, or dangerous terrain. A zombie might stumble into a fast-flowing river to reach foes on a far shore, clawing at the surface as it is battered against rocks and destroyed. To reach a foe below it, a zombie might step out of an open window. Zombies stumble through roaring infernos, into pools of acid, and across fields littered with caltrops without hesitation.
            <br /><br />
            A zombie can follow simple orders and distinguish friends from foes, but its ability to reason is limited to shambling in whatever direction it is pointed, pummeling any enemy in its path. A zombie armed with a weapon uses it, but the zombie won’t retrieve a dropped weapon or other tool until told to do so.
            <br /><br />
            <b><i>Undead Nature.</i></b> A zombie doesn’t require air, food, drink, or sleep.</p>
            ,
            "Ghoul": 
            <p>Ghouls roam the night in packs, driven by an insatiable hunger for humanoid flesh.
            <br /><br />
            <b><i>Devourers of Flesh.</i></b> Like maggots or carrion beetles, ghouls thrive in places rank with decay and death. A ghoul haunts a place where it can gorge on dead flesh and decomposing organs. When it can’t feed on the dead, it pursues living creatures and attempts to make corpses of them. Though they gain no nourishment from the corpses they devour, ghouls are driven by an unending hunger that compels them to consume. A ghoul’s undead flesh never rots, and this monster can persist in a crypt or tomb for untold ages without feeding.
            <br /><br />
            <b><i>Abyssal Origins.</i></b> Ghouls trace their origins to the Abyss. Doresain, the first of their kind, was an elf worshiper of Orcus. Turning against his own people, he feasted on humanoid flesh to honor the Demon Prince of Undeath. As a reward for his service, Orcus transformed Doresain into the first ghoul. Doresain served Orcus faithfully in the Abyss, creating ghouls from the demon lord’s other servants until an incursion by Yeenoghu, the demonic Gnoll Lord, robbed Doresain of his abyssal domain. When Orcus would not intervene on his behalf, Doresain turned to the elf gods for salvation, and they took pity on him and helped him escape certain destruction. Since then, elves have been immune to the ghouls’ paralytic touch.</p>
            ,
            "Ghast": 
            <p>Ghouls roam the night in packs, driven by an insatiable hunger for humanoid flesh.
            <br /><br />
            <b><i>Devourers of Flesh.</i></b> Like maggots or carrion beetles, ghouls thrive in places rank with decay and death. A ghoul haunts a place where it can gorge on dead flesh and decomposing organs. When it can’t feed on the dead, it pursues living creatures and attempts to make corpses of them. Though they gain no nourishment from the corpses they devour, ghouls are driven by an unending hunger that compels them to consume. A ghoul’s undead flesh never rots, and this monster can persist in a crypt or tomb for untold ages without feeding.
            <br /><br />
            <b><i>Abyssal Origins.</i></b> Ghouls trace their origins to the Abyss. Doresain, the first of their kind, was an elf worshiper of Orcus. Turning against his own people, he feasted on humanoid flesh to honor the Demon Prince of Undeath. As a reward for his service, Orcus transformed Doresain into the first ghoul. Doresain served Orcus faithfully in the Abyss, creating ghouls from the demon lord’s other servants until an incursion by Yeenoghu, the demonic Gnoll Lord, robbed Doresain of his abyssal domain. When Orcus would not intervene on his behalf, Doresain turned to the elf gods for salvation, and they took pity on him and helped him escape certain destruction. Since then, elves have been immune to the ghouls’ paralytic touch.
            <br /><br />
            <b><i>Ghasts:</i></b> Orcus sometimes infuses a ghoul with a stronger dose of abyssal energy, making a ghast. Whereas ghouls are little more than savage beasts, a ghast is cunning and can inspire a pack of ghouls to follow its commands.</p>
            ,
            "Wight": 
            <p>The word “wight” meant “person” in days of yore, but the name now refers to evil undead who were once mortals driven by dark desire and great vanity. When death stills such a creature’s heart and snuffs its living breath, its spirit cries out to the demon lord Orcus or some vile god of the underworld for a reprieve: undeath in return for eternal war on the living. If a dark power answers the call, the spirit is granted undeath so that it can pursue its own malevolent agenda.
            <br /><br />
            Wights possess the memories and drives of their formerly living selves. They will heed the call of whatever dark entity transformed them into undead, swearing oaths to appease their new lord while retaining their autonomy. Never tiring, a wight can pursue its goals relentlessly and without distraction.
            <br /><br />
            <b><i>Life Eaters.</i></b> Neither dead nor alive, a wight exists in a transitional state between one world and the next. The bright spark it possessed in life is gone, and in its place is a yearning to consume that spark in all living things. When a wight attacks, this life essence glows like white-hot embers to its dark eyes, and the wight’s cold touch can drain the spark through flesh, clothing, and armor.
            <br /><br />
            <b><i>Shadow of the Grave.</i></b> Wights flee from the world by day, away from the light of the sun, which they hate. They retreat to barrow mounds, crypts, and tombs where they dwell. Their lairs are silent, desolate places, surrounded by dead plants, noticeably blackened, and avoided by bird and beast.
            <br /><br />
            Humanoids slain by a wight can rise as zombies under its control. Motivated by hunger for living souls and driven by the same desire for power that awakened them in undeath, some wights serve as shock troops for evil leaders, including wraiths. As soldiers, they are able to plan but seldom do so, relying on their hunger for destruction to overwhelm any creature that stands before them.
            <br /><br />
            <b><i>Undead Nature.</i></b> A wight doesn’t require air, food, drink, or sleep.</p>
            ,
            "Mummy": 
            <p>Raised by dark funerary rituals, a mummy shambles from the shrouded stillness of a time-lost temple or tomb. Having been awoken from its rest, it punishes transgressors with the power of its unholy curse.
            <br /><br />
            <b><i>Preserved Wrath.</i></b> The long burial rituals that accompany a mummy’s entombment help protect its body from rot. In the embalming process, the newly dead creature’s organs are removed and placed in special jars, and its corpse is treated with preserving oils, herbs, and wrappings. After the body has been prepared, the corpse is typically wrapped in linen bandages.
            <br /><br />
            <b><i>The Will of Dark Gods.</i></b> An undead mummy is created when the priest of a death god or other dark deity ritually imbues a prepared corpse with necromantic magic. The mummy’s linen wrappings are inscribed with necromantic markings before the burial ritual concludes with an invocation to darkness. As a mummy endures in undeath, it animates in response to conditions specified by the ritual. Most commonly, a transgression against its tomb, treasures, lands, or former loved ones will cause a mummy to rise.
            <br /><br />
            <b><i>The Punished.</i></b> Once deceased, an individual has no say in whether or not its body is made into a mummy. Some mummies were powerful individuals who displeased a high priest or pharaoh, or who committed crimes of treason, adultery, or murder. As punishment, they were cursed with eternal undeath, embalmed, mummified, and sealed away. Other times, mummies acting as tomb guardians are created from slaves put to death specifically to serve a greater purpose.
            <br /><br />
            <b><i>Creature of Ritual.</i></b> A mummy obeys the conditions and parameters laid down by the rituals that created it, driven only to punish transgressors. The overwhelming terror that foreshadows a mummy’s attack can leave the intended victim paralyzed with fright. In the days following a mummy’s touch, a victim’s body rots from the outside in, until nothing but dust remains.
            <br /><br />
            <b><i>Ending a Mummy’s Curse.</i></b> Rare magic can undo or dispel the ritual that gave rise to a mummy, allowing it to truly die. More commonly, a mummy can be sent back to its endless rest by undoing the transgression that caused it to rise. A sacred idol might be replaced in its niche, a stolen treasure could be returned to its tomb, or a temple might be purified of despoiling bloodshed.
            <br /><br />
            More ephemeral or permanent offenses, such as revealing a secret the mummy wished kept or killing an individual the mummy loved, can’t be so easily remedied. In such cases, a mummy might slaughter all the creatures responsible and still not sate its wrath.
            <br /><br />
            <b><i>Undead Archives.</i></b> Though they seldom bother to do so, mummies can speak. As a result, some serve as undead repositories of lost lore, and can be consulted by the descendants of those who created them. Powerful individuals sometimes intentionally sequester mummies away for occasional consultation.
            <br /><br />
            <b><i>Undead Nature.</i></b> A mummy doesn’t require air, food, drink, or sleep.</p>
        ,
            "Undead Spirit": 
            <p><b><i>You call forth an undead spirit.</i></b> It manifests in an unoccupied space that you can see within range. This corporeal form uses the Undead Spirit stat block. When you cast the spell, choose the creature’s form: Ghostly, Putrid, or Skeletal. The spirit resembles an undead creature with the chosen form, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.
            <br /><br />
            The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don’t issue any, it takes the Dodge action and uses its move to avoid danger.
            </p>
        }
        return (
            <div className='Description'>
                {descriptions[minionType]}
            </div>
        );
    }
}

export default Description;