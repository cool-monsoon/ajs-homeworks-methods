import Undead from '../undead';

test('testing class Undead with correct name length', () => {
  const undead = new Undead('undead');
  const expected = {
    name: 'undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(undead).toEqual(expected);
});

test('testing class Undead with incorrect name length', () => {
  expect(() => {
    const undead = new Undead('A', 'undead');
    return undead;
  }).toThrow(new Error('Incorrect name. The name must not be a number and must contain from 2 to 10 symbols'));
});

test('testing class Undead with a number instead of name', () => {
  expect(() => {
    const undead = new Undead(666, 'undead');
    return undead;
  }).toThrow(new Error('Incorrect name. The name must not be a number and must contain from 2 to 10 symbols'));
});

test('testing class Undead with charater type that does not exist', () => {
  expect(() => {
    const undead = new Undead('undead', 'Peacemaker');
    return undead;
  }).toThrow(new Error('Such character type does not exist'));
});
