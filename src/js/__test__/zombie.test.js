import Zombie from '../zombie';

test('testing class Zombie with correct name length', () => {
  const zombie = new Zombie('zombie');
  const expected = {
    name: 'zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(zombie).toEqual(expected);
});

test('testing class Zombie with incorrect name length', () => {
  expect(() => {
    const zombie = new Zombie('A', 'zombie');
    return zombie;
  }).toThrow(new Error('Incorrect name. The name must not be a number and must contain from 2 to 10 symbols'));
});

test('testing class Zombie with a number instead of name', () => {
  expect(() => {
    const zombie = new Zombie(666, 'zombie');
    return zombie;
  }).toThrow(new Error('Incorrect name. The name must not be a number and must contain from 2 to 10 symbols'));
});

test('testing class Zombie with charater type that does not exist', () => {
  expect(() => {
    const zombie = new Zombie('zombie', 'Peacemaker');
    return zombie;
  }).toThrow(new Error('Such character type does not exist'));
});
