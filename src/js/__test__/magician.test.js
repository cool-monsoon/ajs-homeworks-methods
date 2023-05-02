import Magician from '../magician';

test('testing class Magician with correct name length', () => {
  const magician = new Magician('magician');
  const expected = {
    name: 'magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(magician).toEqual(expected);
});

test('testing class Magician with incorrect name length', () => {
  expect(() => {
    const magician = new Magician('A', 'magician');
    return magician;
  }).toThrow(new Error('Incorrect name. The name must not be a number and must contain from 2 to 10 symbols'));
});

test('testing class Magician with a number instead of name', () => {
  expect(() => {
    const magician = new Magician(666, 'magician');
    return magician;
  }).toThrow(new Error('Incorrect name. The name must not be a number and must contain from 2 to 10 symbols'));
});

test('testing class Magician with charater type that does not exist', () => {
  expect(() => {
    const magician = new Magician('magician', 'Peacemaker');
    return magician;
  }).toThrow(new Error('Such character type does not exist'));
});
