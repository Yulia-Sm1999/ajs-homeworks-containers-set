import Team from '../src/Team';

test('should add new character in team', () => {
  const team = new Team();
  const characterToAdd = {
    name: 'Clark',
    type: 'Bowman',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  };
  team.add(characterToAdd);
  const realBowman = team.toArray();
  const expectedBowman = [{
    name: 'Clark',
    type: 'Bowman',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  }];
  expect(realBowman).toEqual(expectedBowman);
});

test('should not add character in team because it is already there', () => {
  const team = new Team();
  const characterToAdd = {
    name: 'Clark',
    type: 'Bowman',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  };
  team.add(characterToAdd);
  const secondCharacterToAdd = characterToAdd;
  expect(() => team.add(secondCharacterToAdd)).toThrowError('Персонаж уже есть в команде!');
});

test('should add few character at a time', () => {
  const team = new Team();
  const charactersToAdd = [{
    name: 'Clark',
    type: 'Bowman',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  },
  {
    name: 'Ben',
    type: 'Swordsman',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  }];
  team.addAll(...charactersToAdd);
  const result = team.toArray();
  const expected = [{
    name: 'Clark',
    type: 'Bowman',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  },
  {
    name: 'Ben',
    type: 'Swordsman',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  }];
  expect(result).toEqual(expected);
});
