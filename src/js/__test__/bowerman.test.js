import Bowerman from '../bowerman';

test('testing class Bowerman with correct name length', () => {
  const bowerman = new Bowerman('bowerman');
  const expected = {
    name: 'bowerman',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(bowerman).toEqual(expected);
});

test('testing class Bowerman with incorrect name length', () => {
  expect(() => {
    const bowerman = new Bowerman('A', 'bowerman');
    return bowerman;
  }).toThrow(new Error('Incorrect name. The name must not be a number and must contain from 2 to 10 symbols'));
});

test('testing class Bowerman with a number instead of name', () => {
  expect(() => {
    const bowerman = new Bowerman(666, 'bowerman');
    return bowerman;
  }).toThrow(new Error('Incorrect name. The name must not be a number and must contain from 2 to 10 symbols'));
});

test('testing class Bowerman with charater type that does not exist', () => {
  expect(() => {
    const bowerman = new Bowerman('bowerman', 'Peacemaker');
    return bowerman;
  }).toThrow(new Error('Such character type does not exist'));
});
