import Character from '../character';

test('testing class Character with correct values', () => {
  const character = new Character('Robin', 'Bowerman', 25, 25);
  const expected = {
    name: 'Robin',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(character).toEqual(expected);
});

test('testing class Character with too long name length', () => {
  expect(() => {
    const character = new Character('Robin-The-Hood', 'Bowerman', 25, 25);
    return character;
  }).toThrow(new Error('Incorrect name. The name must not be a number and must contain from 2 to 10 symbols'));
});

test('testing class Character with too short name length', () => {
  expect(() => {
    const character = new Character('R', 'Bowerman');
    return character;
  }).toThrow(new Error('Incorrect name. The name must not be a number and must contain from 2 to 10 symbols'));
});

test('testing class Character with a number instead of name', () => {
  expect(() => {
    const character = new Character(777, 'bowerman');
    return character;
  }).toThrow(new Error('Incorrect name. The name must not be a number and must contain from 2 to 10 symbols'));
});

test('testing class Character with charater type that does not exist', () => {
  expect(() => {
    const character = new Character('Robin', 'Peacemaker', 25, 25);
    return character;
  }).toThrow(new Error('Such character type does not exist'));
});

test('testing method levelUp with correct value of health', () => {
  const character = new Character('Robin', 'Bowerman', 25, 25);
  character.levelUp();
  const expected = {
    name: 'Robin',
    type: 'Bowerman',
    health: 100,
    level: 2,
    attack: 25 + 25 * 0.2,
    defence: 25 + 25 * 0.2,
  };

  expect(character).toEqual(expected);
});

test('testing method levelUp with incorrect value of health', () => {
  expect(() => {
    const character = new Character('Robin', 'Bowerman', 25, 25);
    character.health = 0;
    character.levelUp();
    return character;
  }).toThrow(new Error('Can not rise the level of the dead'));
});

test('testing method damage with value of health > 0', () => {
  const character = new Character('Robin', 'Bowerman', 25, 25);
  character.damage(10);
  const expected = {
    name: 'Robin',
    type: 'Bowerman',
    health: 92.5,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(character).toEqual(expected);
});

test('testing method damage with the result health will be 0', () => {
  const character = new Character('Robin', 'Bowerman', 25, 25);
  character.health = 0;
  character.damage(10);
  const expected = {
    name: 'Robin',
    type: 'Bowerman',
    health: 0,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(character).toEqual(expected);
});

test('testing method damage with the result health will be < 0', () => {
  const character = new Character('Robin', 'Bowerman', 25, 25);
  character.health = 5;
  character.damage(10);
  const expected = {
    name: 'Robin',
    type: 'Bowerman',
    health: 0,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(character).toEqual(expected);
});
