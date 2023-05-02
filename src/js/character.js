export default class Character {
  constructor(name, type, attack, defence, health = 100, level = 1) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      const error = new Error('Incorrect name. The name must not be a number and must contain from 2 to 10 symbols');
      throw error;
    }
    const types = [
      'Bowerman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];

    if (!types.includes(type)) {
      const error = new Error('Such character type does not exist');
      throw error;
    }

    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health !== 0) {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    } else {
      throw new Error('Can not rise the level of the dead');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
      if (this.health < 0) {
        this.health = 0;
      }
    }
  }
}
