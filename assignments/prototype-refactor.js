/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

  === GameObject ===
*/
class GameObject {
    constructor(attr) {
        this.createdAt = attr.createdAt;
        this.name = attr.name;
        this.dimensions = attr.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`;
      }   
}  
  
  /*
    === CharacterStats ===
  */
  class CharacterStats extends GameObject {
      constructor(charAttr) {
        super(charAttr);
        this.healthPoints = charAttr.healthPoints;
      }
      takeDamage() {
        return `${this.name} took damage.`
      };
  }
  
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
  */
  class Humanoid extends CharacterStats {
      constructor(humAttr) {
        super(humAttr);
        this.team = humAttr.team;
        this.weapons = humAttr.weapons;
        this.language = humAttr.language;
      }
      greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
      }  
  }

  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
    class Villain extends Humanoid {
        constructor (vilAttr) {
            super(vilAttr);
        }
        strike(target) {
            target.healthPoints = target.healthPoints - 4;
            if (target.healthPoints <= 0) {
              return target.destroy();
            }else{
              return target.takeDamage();
            }
        }
    }
  
    class Hero extends Humanoid {
        constructor (heroAttr) {
            super(heroAttr);
        }
        strike(target) {
            target.healthPoints = target.healthPoints - 4;
            if (target.healthPoints <= 0) {
              return target.destroy();
            }else{
              return target.takeDamage();
            }
        }
    }
  
    const skeleton = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Skeleton',
      team: 'Undead',
      weapons: [
        'Sword'
      ],
      language: 'Unknown',
    })
  
    const jason = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 3,
      },
      healthPoints: 15,
      name: 'Jason',
      team: 'Argonaut',
      weapons: [
        'Sword',
        'Shield',
      ],
      language: 'Greek',
    })
  
    console.log(jason.strike(skeleton));
    console.log(skeleton.strike(jason));
    console.log(jason.strike(skeleton));
    console.log(skeleton.strike(jason));
    console.log(jason.strike(skeleton));
