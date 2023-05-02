import Swordsman from '../swordsman';

test('testing class Swordsman with correct name length', () => {
  const swordsman = new Swordsman('swordsman');
  const expected = {
    name: 'swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(swordsman).toEqual(expected);
});

test('testing class Swordsman with incorrect name length', () => {
  expect(() => {
    const swordsman = new Swordsman('A', 'swordsman');
    return swordsman;
  }).toThrow(new Error('Incorrect name. The name must not be a number and must contain from 2 to 10 symbols'));
});

test('testing class Swordsman with a number instead of name', () => {
  expect(() => {
    const swordsman = new Swordsman(666, 'swordsman');
    return swordsman;
  }).toThrow(new Error('Incorrect name. The name must not be a number and must contain from 2 to 10 symbols'));
});

test('testing class Swordsman with charater type that does not exist', () => {
  expect(() => {
    const swordsman = new Swordsman('swordsman', 'Peacemaker');
    return swordsman;
  }).toThrow(new Error('Such character type does not exist'));
});
