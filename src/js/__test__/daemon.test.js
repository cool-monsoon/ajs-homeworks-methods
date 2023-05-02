import Daemon from '../daemon';

test('testing class Daemon with correct name length', () => {
  const daemon = new Daemon('daemon');
  const expected = {
    name: 'daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(daemon).toEqual(expected);
});

test('testing class Daemon with incorrect name length', () => {
  expect(() => {
    const daemon = new Daemon('A', 'daemon');
    return daemon;
  }).toThrow(new Error('Incorrect name. The name must not be a number and must contain from 2 to 10 symbols'));
});

test('testing class Daemon with a number instead of name', () => {
  expect(() => {
    const daemon = new Daemon(666, 'daemon');
    return daemon;
  }).toThrow(new Error('Incorrect name. The name must not be a number and must contain from 2 to 10 symbols'));
});

test('testing class Daemon with charater type that does not exist', () => {
  expect(() => {
    const daemon = new Daemon('daemon', 'Peacemaker');
    return daemon;
  }).toThrow(new Error('Such character type does not exist'));
});
